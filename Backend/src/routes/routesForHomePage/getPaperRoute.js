const getPopulatedPaper = require("../../db/dbForHomePage/getPopulatedPaper");
const getSanitizedPaper = require("../../db/dbForHomePage/getSanitizedPaper");
const getUserOwnsPaper = require("../../db/dbForHomePage/getUserOwnsPaper");
const getPaperIsSharedWithUser = require("../../db/dbForHomePage/getPapersSharedWithUser");

module.exports = getPaperRoute = {
  method: "get",
  path: "/papers/:id",
  handler: async (req, res) => {
    const user = req.user;
    const { id: paperId } = req.params;
    const userIsOwner = await getUserOwnsPaper(user.user_id, paperId);
    const PaperIsSharedWithUser = await getPaperIsSharedWithUser(
      user.user_id,
      paperId
    );
    if (userIsOwner) {
      const paper = await getPopulatedPaper(paperId);
      res.status(200).json(paper);
    } else if (PaperIsSharedWithUser) {
      const paper = await getSanitizedPaper(paperId);
      res.status(200).json(paper);
    } else {
      res.status(401).json({ message: "User is not allowed to get paper!" });
    }
  },
};
