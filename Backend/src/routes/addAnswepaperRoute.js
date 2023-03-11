const insertAnswerPaper = require("../db/insertAnswerPaper");
const addResultFunction = require("./addResultFunction");

module.exports = addAnswerPaper = {
  method: "post",
  path: "/addanswerpaper/:id",
  handler: async (req, res) => {
    const user = req.user;
    var AnswerPaper = req.body;
    const { id } = req.params;
    const AnsId = await insertAnswerPaper(AnswerPaper, user.user_id, id);

    const resultId = await addResultFunction(user.user_id, id, AnswerPaper);
    console.log(resultId);

    res.status(200).json(AnsId);
  },
};
