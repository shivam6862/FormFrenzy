const getPaperDone = require("../db/getPaperDone");
const checkTimeFunction = require("./checkTimeFunction");
const getQuestionPaper = require("../db/getQuestionPaper");

module.exports = getPaperDoneRoute = {
  method: "get",
  path: "/checkpaperdone/:id",
  handler: async (req, res) => {
    const { id } = req.params;
    const user = req.user;
    const check = await getPaperDone(user.user_id, id);
    const questionpaper = await getQuestionPaper(id);
    const checkTime = await checkTimeFunction(check , questionpaper.time.time);
    if (check.length == 0 || checkTime == 1) {
      res.status(200).json("notvisited");
      return;
    } else {
      res.status(200).json("visited");
    }
  },
};
