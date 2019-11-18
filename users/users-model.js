const db = require("../database/dbConfig");

module.exports = {
  getUsers,
  getUsersById,
  addUser,
  updateUser,
  removeUser
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

function updateUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function removeUser(id) {
  return db("users")
    .where("id", id)
    .del();
}
