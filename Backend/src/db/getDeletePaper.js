const getDb = require("./db").getDb;

module.exports = getDeletePaper = async (paperId) => {
  const connection = await getDb();
  await connection.collection("questionpaper").deleteOne({ id: paperId });
};
