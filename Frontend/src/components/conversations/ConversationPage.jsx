import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../auth/useUser";
import socketIoClient from "socket.io-client";
var audio = new Audio("/sound.mp3");
const ConversationPage = () => {
  const [socket, setSocket] = useState(null);
  const [messageValue, setMessageValue] = useState("");
  const [messages, setMessages] = useState([]);
  const { id: conversationId } = useParams();
  const { user } = useUser();

  const postMessage = async () => {
    socket.emit("postMessage", {
      text: messageValue,
      conversationId,
      query: {
        conversationId,
        token: await user.getIdToken(),
      },
    });
    setMessageValue("");
  };

  useEffect(() => {
    const establishSocketConnection = async () => {
      const socket = socketIoClient(
        `${import.meta.env.VITE_REACT_BACKEND_URL}`,
        {
          query: {
            conversationId,
            token: await user.getIdToken(),
          },
        }
      );

      setSocket(socket);
      socket.on("messagesForYou", (conversation) => {
        // conversation contain memberId , member name ,  meessage , name of group , _id
        setMessages(conversation.messages);
      });
      socket.on("messagesUpdated", (messages) => {
        if (
          messages[Object.keys(messages)[Object.keys(messages).length - 1]]
            .postedBy.email != user.email
        ) {
          audio.play();
        }
        setMessages(messages);
      });
    };
    if (user) {
      establishSocketConnection();
    }
    // return () => socket.disconnect();
  }, []);

  // className={`${list-item} ${left}`}

  return (
    <div className="centered-container-conversation-each">
      <div className="message-container">
        {messages.map((message) => {
          if (message.postedBy.email == user.email) {
            return (
              <div key={message._id} className="list-item right">
                {/* <h3>{message.postedBy.name}</h3> */}
                <h3>You</h3>
                <p>{message.text}</p>
              </div>
            );
          } else {
            return (
              <div key={message._id} className="list-item left">
                <h3>{message.postedBy.name}</h3>
                <p>{message.text}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="input-form">
        <input
          type="text"
          placeholder="Enter a new message Here"
          value={messageValue}
          onChange={(e) => setMessageValue(e.target.value)}
        />
        <button className="conversation-button" onClick={postMessage}>Send</button>
      </div>
    </div>
  );
};

export default ConversationPage;
