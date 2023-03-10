const getDb = require("../db").getDb;

module.exports = acceptRequest = async (userId) => {
  const connection = await getDb();
  const sharesPapers = await connection
    .collection("questionpaper")
    .find({ sharedWith: userId })
    .toArray();
  // This will automatically see if userId is contained in sharedWith array
  return sharesPapers;
};
