const getAllResultsForUser = require("../db/getAllResultsForUser");

module.exports = getAllResultsForUserRoute = {
  method: "get",
  path: "/results",
  handler: async (req, res) => {
    const user = req.user;
    const results = await getAllResultsForUser(user.user_id);
    res.status(200).json(results);
  },
};
