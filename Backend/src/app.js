const express = require("express");
const routes = require("./routes");
const http = require("http");
const protectRouteMiddleware = require("./routes/protectRouteMiddleware");
const admin = require("firebase-admin");
const socketIo = require("socket.io");
const credentials = require("./credentials.json");
const mongoConnect = require("./db/db").mongoConnect;
const addMessageToConversation = require("./db/dbForConversation/addMessageToConversation");
const getCanUserAccessConversation = require("./db/dbForConversation/getCanUserAccessConversation");
const getConversation = require("./db/dbForConversation/getConversation");
const dotenv = require("dotenv");
dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,AuthToken"
  );
  next();
});

routes.forEach((route) =>
  app[route.method](route.path, protectRouteMiddleware, route.handler)
);

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

io.use(async (socket, next) => {
  // Veritfying user auth token
  if (!socket.handshake.query.token) {
    socket.emit("error", "You need to add auth token");
  } else {
    const user = await admin.auth().verifyIdToken(socket.handshake.query.token);

    socket.user = user;

    next();
  }
});

io.on("connection", async (socket) => {
  // A new Client is connected to socket.
  const conversationId = socket.handshake.query.conversationId;
  const conversation = await getConversation(conversationId);
  socket.emit("messagesForYou", conversation);

  socket.on("postMessage", async ({ text, conversationId }) => {
    const { user_id: userId } = socket.user;
    // text send by the user
    const userIsAuthorized = await getCanUserAccessConversation(
      userId,
      conversationId
    );
    if (userIsAuthorized) {
      await addMessageToConversation(text, userId, conversationId);
      const updatedConversation = await getConversation(conversationId);
      io.emit("messagesUpdated", updatedConversation.messages);
    }
  });
  socket.on("disconnect", () => {
    console.log("Client Disconnected!");
  });
});

const start = async () => {
  mongoConnect(() => {
    server.listen(8080, () => {
      console.log("Server is listening on Port 8080");
    });
  });
};

start();
