exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "Pepperoni Pizza",
          recipe_source: "Evil Grandma",
          recipe_ingredients:
            "tomatoes, salt, cheese, flour, black pepper, sugar, garlic powder, onion powder, magic wand, garlic potion ",
          recipe_category: "dinner",
          user_id: 1
        }, // id 1 will be generated
        {
          recipe_name: "Pork Tacos",
          recipe_source: "Annoying Aunty",
          recipe_ingredients:
            "shrimp, salt, beef, roasted veggies, shredded chicken, some bits of annoyance ",
          recipe_category: "dessert",
          user_id: 2
        }, //id  2
        {
          recipe_name: "Hot Dog",
          recipe_source: "Grinchy Cousin",
          recipe_ingredients:
            "sausage, bread, mustard, salt, Grinchy ketchup",
          recipe_category: "snack",
          user_id: 3
        } //id  3
      ]);
    });
};
