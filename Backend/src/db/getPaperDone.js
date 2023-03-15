const getDb = require("./db").getDb;

module.exports = getPaperDone = async (userid, paperid) => {
  const connection = await getDb();
  const insertedId = await connection
    .collection("paperdone")
    .find({ userid, paperid })
    .toArray();
  return insertedId;
};
