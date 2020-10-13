exports.seed = function (knex) {
  return knex("users").insert([
      { username: "admin", password: "pass" },
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" },
  ]);
};
