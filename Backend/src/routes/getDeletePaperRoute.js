const getDeletePaper = require("../db/getDeletePaper");
const getPapersForUser = require("../db/dbForHomePage/getPapersForUser");

module.exports = getDeletePaperRoute = {
  method: "post",
  path: "/deletequestionpaper",
  handler: async (req, res) => {
    const paperId = req.body.paperId;
    const Delete = await getDeletePaper(paperId);
    const user = req.user;
    const papers = await getPapersForUser(user.user_id);
    res.status(200).json(papers);
  },
};
