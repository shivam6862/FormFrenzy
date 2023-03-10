const getPaper = require("./getPaper");

module.exports = getSanitizedPaper = async (paperId) => {
  const paper = await getPaper(paperId);
  delete paper.sharedWith;
  return paper;
};
