const addResult = require("../db/addResult");
const getQuestionPaper = require("../db/getQuestionPaper");

module.exports = addResultFunction = async (
  userId,
  paperId,
  AnswerPaperObject
) => {
  var AllPartQuestionPaperWithCheck = await getQuestionPaper(paperId);
  var QuestionPaperWithCheck = AllPartQuestionPaperWithCheck.AllQuestion;

  var AnswerPaperArrayOfArray = Object.values(AnswerPaperObject);
  var AnswerPaper = AnswerPaperArrayOfArray[0];

  var untitledDocument = AllPartQuestionPaperWithCheck.untitledDocument;
  var formDescription = AllPartQuestionPaperWithCheck.formDescription;

  var checkedAnswerPaper = [];

  let score = 0;

  AnswerPaper.map((eachAnswer, i) => {
    var newAnswerType = {
      questionText: "Question",
      questionType: "radio",
      options: [],
      answerKey: [
        { optionMark: "unmark" },
        { optionMark: "unmark" },
        { optionMark: "unmark" },
        { optionMark: "unmark" },
        { optionMark: "unmark" },
      ],
      points: 0,
    };

    newAnswerType.questionText = QuestionPaperWithCheck[i].questionText;
    newAnswerType.questionType = QuestionPaperWithCheck[i].questionType;
    newAnswerType.options = QuestionPaperWithCheck[i].options;
    newAnswerType.points = QuestionPaperWithCheck[i].points;

    var type = QuestionPaperWithCheck[i].questionType;
    var correct = 0;
    var wrong = 0;
    eachAnswer.optionsMark.map((eachoptionsMark, j) => {
      if (
        QuestionPaperWithCheck[i].answerKey[j].optionMark ==
        AnswerPaper[i].optionsMark[j].optionMark
      ) {
        newAnswerType.answerKey[j].optionMark = "true";
        correct += 1;
      } else {
        newAnswerType.answerKey[j].optionMark = "false";
        wrong += 1;
      }
    });

    if (type == "text") {
      score += +QuestionPaperWithCheck[i].points;
    } else if (type == "radio") {
      if (wrong == 0) score += +QuestionPaperWithCheck[i].points;
    } else if (type == "checkbox") {
      var eachpointforcheckbox =
        QuestionPaperWithCheck[i].points /
        QuestionPaperWithCheck[i].answerKey.length;
      score += +eachpointforcheckbox * correct;
    }
    checkedAnswerPaper.push(newAnswerType);
  });

  checkedAnswerPaper.push(score);
  checkedAnswerPaper.push(untitledDocument);
  checkedAnswerPaper.push(formDescription);

  const resultId = await addResult(userId, paperId, checkedAnswerPaper);
  return resultId;
};
