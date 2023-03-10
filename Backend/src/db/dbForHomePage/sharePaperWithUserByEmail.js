const getDb = require("../db").getDb;
module.exports = sharePaperWithUserByEmail = async (paperId, email) => {
  const connection = await getDb();
  const user = await connection.collection("users").findOne({ email });
  if (user) {
    await connection.collection("questionpaper").updateOne(
      { id:paperId},
      {
        $push: { sharedWith: user.id },
      }
    );
  }
};
