const addQuestionPaper = require("./addQuestionPaperRoute");

const getUserConversationsRoute = require("./routesForConversation/getUserConversationsRoute");
const getAllUsersRoute = require("./routesForConversation/getAllUsersRoute");
const createConversationRoute = require("./routesForConversation/createConversationRoute");

const getMyPapersRoute = require("./routesForHomePage/getMyPapersRoute");
const getSharedPapersRoute = require("./routesForHomePage/getSharedPapersRoute");
const getPaperRoute = require("./routesForHomePage/getPaperRoute");
const shareWithEmailRoute = require("./routesForHomePage/shareWithEmailRoute");

module.exports = routes = [
  addQuestionPaper,
  getUserConversationsRoute,
  getAllUsersRoute,
  createConversationRoute,
  getMyPapersRoute,
  getSharedPapersRoute,
  getPaperRoute,
  shareWithEmailRoute,
];
