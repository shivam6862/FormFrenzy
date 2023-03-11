const getDb = require("../db").getDb;
const getRequestsForPaper = require("./getRequestsForPaper");
const getMemberPopulatedPaper = require("./getMemberPopulatedPaper");

module.exports = getOwnerPopulatedPaper = async (paperId) => {
  const paper = await getMemberPopulatedPaper(paperId);
  const requests = await getRequestsForPaper(paperId);
  const populatedPaper = { ...paper, requests };
  return populatedPaper;
};
