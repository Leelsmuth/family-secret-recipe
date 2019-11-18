const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (request, response) => {
  Recipes.getRecipes()
    .then(recipes => {
      response.json(recipes);
    })
    .catch(error => {
      response
        .status(500)
        .json({ message: "Failed to get users" + error.message });
    });
});

router.get("/:id", (request, response) => {
  const { id } = request.params;

  Recipes.getRecipesById(id)
    .then(recipes => {
      if (recipes.length) {
        response.json(recipes);
      } else {
        response
          .status(404)
          .json({ message: "Could not find data for given recipe" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get recipe" });
    });
});

router.post("/", (req, res) => {
  const newRecipe = req.body;

  Recipes.addRecipe(newRecipe)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(error => {
      res.status(500).json("failed to add resource" + error.message);
    });
});

router.post("/", (req, res) => {
  const newUser = req.body;

  Recipes.addRecipe(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json("failed to add resource" + error.message);
    });
});

module.exports = router;
