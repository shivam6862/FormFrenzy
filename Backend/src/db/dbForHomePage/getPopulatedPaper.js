const getPaper = require("./getPaper");
const getUser = require("./getUser");

module.exports = getPopulatedPaper = async (paperId) => {
  const paper = await getPaper(paperId);
  const users = await Promise.all(
    paper.sharedWith.map((userId) => getUser(userId))
  );

  const userEmails = users.map((user) => user.email);
  const populatedPaper = { ...paper, sharedWithEmails: userEmails };
  return populatedPaper;
};
