const express = require("express");
const helmet = require("helmet");
const server = express();

const userRouter = require("../users/users-router");
const recipeRouter = require("../recipes/recipes-router");

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use("/api/users", userRouter);
server.use("/api/recipes", recipeRouter);

module.exports = server;
