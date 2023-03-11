const getDb = require("../db").getDb;

module.exports = acceptRequest = async (requestId) => {
  const connection = await getDb();
  const request = await connection
    .collection("requests")
    .findOne({ id: requestId });
    console.log(request);
  await connection.collection("requests").deleteOne({ id: requestId });
  await connection
    .collection("questionpaper")
    .updateOne({ id: request.paperId }, { $push: { sharedWith: request.userId } });
};
