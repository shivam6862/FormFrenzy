// This give collection of all message which is still to think how to send it 

const getPaper = require("./getPaper");

module.exports = getMemberPopulatedPaper = async (paperId) => {
  const paper = await getPaper(paperId);
  const messagesForPaper = [];

  const populatedPaper = { ...paper, messages: messagesForPaper };

  return populatedPaper;
};
