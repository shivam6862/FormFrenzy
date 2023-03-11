const getDb = require("../db").getDb;

module.exports = rejectRequest = async (requestId) => {
  const connection = await getDb();
  await connection.collection("requests").deleteOne({ id: requestId });
};
