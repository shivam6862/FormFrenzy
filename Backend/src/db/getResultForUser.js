const getDb = require("./db").getDb;

module.exports = getResultForUser = async (userId, paperId) => {
  const connection = await getDb();
  const userResult = await connection
    .collection("results")
    .findOne({ userId, paperId });

  return userResult;
};
