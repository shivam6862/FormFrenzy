const rejectRequest = require("../../db/dbForRequest/rejectRequest");
const getRequestsForPaper = require("../../db/dbForRequest/getRequestsForPaper");
const getPaper = require("../../db/dbForRequest/getPaper");
const admin = require("firebase-admin");

module.exports = rejectRequestRoute = {
  method: "post",
  path: "/papers/:paperId/requests/:requestId/reject",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const { paperId, requestId } = req.params;

    const paper = await getPaper(paperId);
    const user = await admin.auth().verifyIdToken(token);
    if (!user || paper.ownerId !== user.user_id) {
      return res.status(401).json({ message: "User is not owner of paper." });
    }
    await rejectRequest(requestId);
    const updatedRequests = getRequestsForPaper(paperId);
    res.status(200).json(updatedRequests);
  },
};
