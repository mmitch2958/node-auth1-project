exports.seed = function (knex) {
    return knex("users").insert([
        { username: "mike", password: "pass1" },
        { username: "scott", password: "pass2" },
        { username: "mitchell", password: "pass3" },
    ]);
};
