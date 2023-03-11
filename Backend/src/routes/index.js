const addQuestionPaper = require("./addQuestionPaperRoute");

const getUserConversationsRoute = require("./routesForConversation/getUserConversationsRoute");
const getAllUsersRoute = require("./routesForConversation/getAllUsersRoute");
const createConversationRoute = require("./routesForConversation/createConversationRoute");

const getMyPapersRoute = require("./routesForHomePage/getMyPapersRoute");
const getSharedPapersRoute = require("./routesForHomePage/getSharedPapersRoute");
const getPaperRouteroutesForHomePage = require("./routesForHomePage/getPaperRoute");
const shareWithEmailRoute = require("./routesForHomePage/shareWithEmailRoute");

const acceptRequestRoute = require("./routesRequest/acceptRequestRoute");
const rejectRequestRoute = require("./routesRequest/rejectRequestRoute");
const createRequestRoute = require("./routesRequest/createRequestRoute");
const getPaperRouteroutesRequest = require("./routesRequest/getPaperRoutes");

const addAnswerPaper = require("./addAnswepaperRoute");

const getAllResultsForUserRoute = require("./getAllResultsForUserRoute");
const getResultForUserRoute = require("./getResultForUserRoute");

module.exports = routes = [
  addQuestionPaper,
  getUserConversationsRoute,
  getAllUsersRoute,
  createConversationRoute,
  getMyPapersRoute,
  getSharedPapersRoute,
  getPaperRouteroutesForHomePage,
  shareWithEmailRoute,
  acceptRequestRoute,
  rejectRequestRoute,
  createRequestRoute,
  getPaperRouteroutesRequest,
  addAnswerPaper,
  getAllResultsForUserRoute,
  getResultForUserRoute,
];
