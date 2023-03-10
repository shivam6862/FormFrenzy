const insertQuestionpaper = require("../db/insertQuestionPaper");

module.exports = addQuestionPaper = {
  method: "post",
  path: "/addQuestionPaper",
  handler: async (req, res) => {
    const user = req.user;
    var QuestionPaper = req.body;
    const docId = await insertQuestionpaper(QuestionPaper , user.user_id);
    res.status(200).json(docId);
  },
};
