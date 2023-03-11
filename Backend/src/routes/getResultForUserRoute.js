const getResultForUser = require("../db/getResultForUser");

module.exports = getResultForUserRoute = {
  method: "get",
  path: "/result/:id",
  handler: async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await getResultForUser(user.user_id, id);
    res.status(200).json(result);
  },
};
