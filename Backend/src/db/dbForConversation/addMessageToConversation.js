const getDb = require("../db").getDb;
const ObjectId = require("mongodb").ObjectId;

module.exports = addMessageToConversation = async (
  messageText,
  userId,
  conversationId
) => {
  const newId = new ObjectId();
  const newMessage = {
    _id: newId,
    text: messageText,
    postedById: userId,
  };
  const connection = await getDb();
  await connection.collection("conversations").updateOne(
    { _id: new ObjectId(conversationId) },
    {
      $push: { messages: newMessage },
    }
  );
};
