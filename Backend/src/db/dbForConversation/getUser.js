const getDb = require("../db").getDb;

module.exports = getUser = async (userId) => {
  const connection = await getDb();
  const user = await connection.collection("users").findOne({ id: userId });
  return user;
};
