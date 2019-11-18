exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      steps:
        "Buy a frozen pizza from the store, take it to Grandma, let her do her voodoo on it, serve as instructed by Grandma",
      recipe_id: 1
    },
    {
      steps:
        "No need to check Instructions. Annoying aunty will always complain about how the tacos are made. Just chill and let her do her thing",
      recipe_id: 2
    },

    {
      steps: "We leave this to your imagination. Stretch yourself...",
      recipe_id: 3
    }
  ]);
};
