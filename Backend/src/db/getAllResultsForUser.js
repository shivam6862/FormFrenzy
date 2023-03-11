const getDb = require("./db").getDb;

module.exports = getAllResultsForUser = async (userId) => {
  const connection =await getDb();
  const userResults = await connection
    .collection("results")
    .find({ userId })
    .toArray();

  return userResults;
};
