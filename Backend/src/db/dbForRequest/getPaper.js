const getDb = require("../db").getDb;
const getUser = require("./getUser.js");

module.exports = getPaper = async (paperId) => {
  const connection = await getDb();
  const paper = await connection.collection("questionpaper").findOne({ id: paperId });
  const owner = await getUser(paper.ownerId);
  const populatedPapers = { ...paper, owner };
  return populatedPapers;
};
