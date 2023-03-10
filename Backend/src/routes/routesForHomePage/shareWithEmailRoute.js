const getUserOwnsPaper = require("../../db/dbForHomePage/getUserOwnsPaper");
const sharePaperWithUserByEmail = require("../../db/dbForHomePage/sharePaperWithUserByEmail");
const getPopulatedPaper = require("../../db/dbForHomePage/getPopulatedPaper");

module.exports = shareWithEmailRoute = {
  method: "post",
  path: "/papers/:id/shared-with",
  handler: async (req, res) => {
    const paperId = req.params.id;
    const userId = req.user.user_id;
    const { email } = req.body;
    const userIsOwner = await getUserOwnsPaper(userId, paperId);
    if (userIsOwner) {
      await sharePaperWithUserByEmail(paperId, email);
      const updatedPaper = await getPopulatedPaper(paperId);
      res.status(200).json(updatedPaper);
    } else {
      res
        .status(401)
        .json({ message: "only the group owner can share a paper!" });
    }
  },
};
