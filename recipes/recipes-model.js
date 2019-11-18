const db = require("../database/dbConfig");

module.exports = {
  getRecipes,
  getRecipesById,
  addRecipe,
  updateRecipe,
  removeRecipe
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
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return getRecipesById(id);
    });
}

function updateRecipe(id, changes) {
  return db("recipes")
    .where({ id })
    .update(changes);
}

function removeRecipe(id) {
  return db("recipes")
    .where("id", id)
    .del();
}

// function addInstruction(steps) {
//   return db("instructions")
//     .insert(steps, "id")
//     .then(ids => {
//       const [id] = ids;
//       return getRecipesById(id);
//     });
// }
