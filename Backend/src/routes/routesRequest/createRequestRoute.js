const admin = require("firebase-admin");
const createJoinRequest = require("../../db/dbForRequest/createJoinRequest");

module.exports = createRequestRoute = {
  method: "post",
  path: "/papers/:id/requests/",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const { id } = req.params;

    const user = await admin.auth().verifyIdToken(token);
    if (!token || !user) {
      res.status(401).json({ message: "Must be logged in to submit requests" });
    }
    await createJoinRequest(id, user.user_id);
    res.status(200).json({ message: "Success!" });
  },
};
