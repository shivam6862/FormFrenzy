const getPaper = require("./getPaper");

module.exports = acceptRequest = async (userId, paperId) => {
  const paper = await getPaper(paperId);
  return paper.ownerId === userId;
};
