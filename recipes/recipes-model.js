const db = require("../database/dbConfig");

module.exports = {
  getRecipes,
  getRecipesById,
  addRecipe
};

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes as r")
    .join("instructions as i", "i.recipe_id", "=", "r.id")
    .select(
      "r.recipe_name",
      "r.recipe_source",
      "r.recipe_ingredients",
      "r.recipe_category",
      "i.steps"
    )
    .where("r.id", id);
}

function addRecipe(user) {
  return db("recipes")
    .join("instructions as i", "i.recipe_id", "=", "r.id")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return getRecipesById(id);
    });
}

// function addInstruction(steps) {
//   return db("instructions")
//     .insert(steps, "id")
//     .then(ids => {
//       const [id] = ids;
//       return getRecipesById(id);
//     });
// }
