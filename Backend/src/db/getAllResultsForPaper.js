const getDb = require("./db").getDb;

module.exports = getAllResultsForPaper = async (paperId) => {
  const connection = await getDb();
  const paperResults = await connection
    .collection("results")
    .find({ paperId })
    .toArray();

  return paperResults;
};
