const express = require("express");

const Users = require("./users-model");

const router = express.Router();

router.get("/", (request, response) => {
  Users.getUsers()
    .then(users => {
      response.json(users);
    })
    .catch(error => {
      response
        .status(500)
        .json({ message: "Failed to get users" + error.message });
    });
});

router.get("/:id", (request, response) => {
  const { id } = request.params;

  Users.getUsersById(id)
    .then(users => {
      if (users.length) {
        response.json(users);
      } else {
        response
          .status(404)
          .json({ message: "Could not find data for given user" });
      }
    })
    .catch(error => {
      response.status(500).json({ message: "Failed to get user" });
    });
});

router.post("/register", (req, res) => {
  const newUser = req.body;

  Users.addUser(newUser)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res.status(500).json("failed to add resource" + error.message);
    });
});

module.exports = router;
