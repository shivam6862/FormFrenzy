const getUsers = require("../db/getUsers");

module.exports = getAllResultForPaperFunction = async (results) => {
  var finalResult = [];
  const users = await getUsers();
  results.map((result, i) => {
    var eachStudentResult = { userName: " ", marks: " " };
    const marks =
      result.checkedAnswerpaper[result.checkedAnswerpaper.length - 3];
    const userId = result.userId;
    const user = users.find((user) => user.id == result.userId);
    const userName = user.name;
    eachStudentResult.marks = marks;
    eachStudentResult.userName = userName;
    finalResult.push(eachStudentResult);
  });

  finalResult.sort((person1, person2) => {
    return +person2.marks - +person1.marks;
  });

  return finalResult;
};
