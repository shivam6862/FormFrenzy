const getDb = require("./db").getDb;

module.exports = getQuestionPaper = async (id) => {
  const connection = await getDb();
  const questionPaper = await connection
    .collection("questionpaper")
    .findOne({ id });

  return questionPaper;
};
