const getAllUsers = require("../../db/dbForConversation/getAllUsers");

module.exports = getAllUsersRoute = {
  method: "get",
  path: "/users",
  handler: async (req, res) => {
    const users = await getAllUsers();
    res.status(200).json(users);
  },
};
