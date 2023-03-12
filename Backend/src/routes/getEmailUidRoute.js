const insertEmailUid = require("../db/insertEmailUid");

module.exports = getEmailUidRoute = {
  method: "post",
  path: "/emailuid",
  handler: async (req, res) => {
    const data = req.body;
    const id = data.firebaseUid;
    const email = data.firebaseEmail;
    const name = email.substring(0, email.indexOf("@"));
    const response = await insertEmailUid(id, email, name);
    res.status(200).json(response);
  },
};
