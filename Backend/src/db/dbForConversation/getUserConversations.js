const getDb = require("../db").getDb;

module.exports = getUserConversations = async (userId) => {
  const connection = await getDb();
  const conversations = await connection
    .collection("conversations")
    .find({ memberIds: userId })
    .toArray();
  return conversations;
};
