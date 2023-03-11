const getDb = require("../db").getDb;
const uuid = require("uuid").v4;

module.exports = createJoinRequest = async (paperId, userId) => {
  const connection = getDb();
  await connection
    .collection("requests")
    .insertOne({ id: uuid(), paperId, userId });
};
