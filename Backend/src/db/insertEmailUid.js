const getDb = require("./db").getDb;

module.exports = insertEmailUid = async (id, email, name) => {
  const connection = await getDb();
  const { insertedId } = await connection
    .collection("users")
    .insertOne({ id: id, email: email, name: name });
  return insertedId;
};
