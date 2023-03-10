const getSharedPapersWithUser = require("../../db/dbForHomePage/getSharedPapersWithUser");

module.exports = getSharedPapersRoute = {
  method: "get",
  path: "/shared",
  handler: async (req, res) => {
    const user = req.user;
    const sharedPapers = await getSharedPapersWithUser(user.user_id);
    res.status(200).json(sharedPapers);
  },
};
