const getDb = require("./db").getDb;

module.exports = insertAsktoEnterInPaper = async (userid, id, time) => {
  const connection = await getDb();
  const { insertedId } = await connection
    .collection("paperdone")
    .insertOne({ userid: userid, paperid: id, time: time });
  return insertedId;
};
