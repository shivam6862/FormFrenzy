const getPapersForUser = require("../../db/dbForHomePage/getPapersForUser");

module.exports = getMyPapersRoute = {
  method: "get",
  path: "/my-papers",
  handler: async (req, res) => {
    const user = req.user;
    const papers = await getPapersForUser(user.user_id);
    res.status(200).json(papers);
  },
};
