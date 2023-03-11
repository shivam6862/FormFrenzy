const getDb = require("../db").getDb;
const getUser = require("./getUser.js");

module.exports = getRequestsForPaper = async (paperId) => {
  const connection = getDb();
  const requests = await connection
    .collection("requests")
    .find({ paperId })
    .toArray();
  const usersForRequests = await Promise.all(
    requests.map((request) => getUser(request.userId))
  );

  const populatedRequests = requests.map((request, i) => ({
    ...request,
    userName: usersForRequests[i].name,
  }));

  return populatedRequests;
};
