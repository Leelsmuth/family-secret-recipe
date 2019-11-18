const db = require("../database/dbConfig");

module.exports = {
  getUsers,
  getUsersById,
  addUser
};

function getUsers() {
  return db("users").select("username", "email");
}

function getUsersById(id) {
  return db("users")
    .select("username", "email")
    .where("id", id);
}

function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return getUsersById(id);
    });
}
