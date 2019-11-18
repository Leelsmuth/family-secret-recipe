exports.seed = function(knex) {
  return knex("users").insert([
    { username: "user1", email: "user1@yahoo.com", password: "1234" },
    { username: "user2", email: "user2@yahoo.com", password: "1234" },
    { username: "user3", email: "user3@yahoo.com", password: "1234" }
  ]);
};
