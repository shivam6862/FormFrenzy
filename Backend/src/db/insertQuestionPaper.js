const getDb = require("./db").getDb;
const uuid = require("uuid").v4;

module.exports = insertQuestionpaper = async (QuestionPaper, ownerId) => {
  const connection = await getDb();
  const Id_name = uuid();

  var AllQuestion = [];

  for (var i = 0; i < QuestionPaper.DataSendToTheBackend.length - 2; i++) {
    AllQuestion.push(QuestionPaper.DataSendToTheBackend[i]);
  }

  var untitledDocument =
    QuestionPaper.DataSendToTheBackend[
      QuestionPaper.DataSendToTheBackend.length - 2
    ];
  var formDescription =
    QuestionPaper.DataSendToTheBackend[
      QuestionPaper.DataSendToTheBackend.length - 1
    ];

  const { insertedId } = await connection
    .collection("questionpaper")
    .insertOne({
      id: Id_name,
      ownerId: ownerId,
      untitledDocument: untitledDocument,
      formDescription: formDescription,
      AllQuestion: AllQuestion,
      sharedWith: [],
    });
  console.log(insertedId);

  return Id_name;
};
