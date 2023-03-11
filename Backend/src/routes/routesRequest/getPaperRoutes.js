const admin = require("firebase-admin");
const getPaper = require("../../db/dbForRequest/getPaper");
const getMemberPopulatedPaper = require("../../db/dbForRequest/getMemberPopulatedPaper");
const getOwnerPopulatedPaper = require("../../db/dbForRequest/getOwnerPopulatedPaper");
module.exports = getPaperRoute = {
  method: "get",
  path: "/papersrequest/:id",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const { id } = req.params;
    const user = await admin.auth().verifyIdToken(token);

    if (!user || !token) {
      return res
        .status(401)
        .json({ message: "Must be logged in to see Paper Info!z" });
    }

    const paper = await getPaper(id);
    
    if (paper.ownerId === user.user_id) {
      const ownerPopulatedPaper = await getOwnerPopulatedPaper(id);
      return res.status(200).json(ownerPopulatedPaper);
    }

    if (paper.sharedWith.includes(user.user_id)) {
      const memberPopulatedPaper = await getMemberPopulatedPaper(id);
      // console.log(memberPopulatedPaper);
      return res.status(200).json(memberPopulatedPaper);
    }
    res.status(200).json(paper);
  },
};
