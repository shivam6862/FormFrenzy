const getDb = require("../db").getDb;
const ObjectId = require("mongodb").ObjectId;

module.exports = getPaper = async (paperId) => {
  const connection = await getDb();
  const paper = await connection
    .collection("questionpaper")
    .findOne({ id: paperId });
  return paper;
};
