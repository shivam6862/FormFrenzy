const getDb = require("../db").getDb;

module.exports = getPapersForUser = async (userId) => {
  const connection = await getDb();
  const papers = await connection
    .collection("questionpaper")
    .find({ ownerId: userId })
    .toArray();
  return papers;
};
