const getDb = require("./db").getDb;

module.exports = addResult = async (userId, paperId, checkedAnswerpaper) => {
  const connection = await getDb();

  const { insertedId } = await connection.collection("results").insertOne({
    userId,
    paperId,
    checkedAnswerpaper,
  });

  console.log(insertedId);

  return insertedId;
};
