const getDb = require("../db").getDb;

module.exports = getAllUsers = async () => {
  const connection = await getDb();
  const users = await connection.collection("users").find({}).toArray();
  return users;
};
