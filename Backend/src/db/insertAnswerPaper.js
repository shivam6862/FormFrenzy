const getDb = require("./db").getDb;

module.exports = insertAnswerPaper = async (AnswerPaper, ownerId, id) => {
  const connection = await getDb();

  const { insertedId } = await connection.collection("answerpaper").insertOne({
    ownerId: ownerId,
    paperId: id,
    AnswerPaper,
  });

  return insertedId;
};
