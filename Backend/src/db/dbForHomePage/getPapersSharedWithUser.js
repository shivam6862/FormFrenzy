const getPaper = require("./getPaper");

module.exports = getPapersSharedWithUser = async (userId, paperId) => {
  const paper = await getPaper(paperId);
  return paper.sharedWith.includes(userId);
};
