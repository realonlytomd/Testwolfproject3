const router = require("express").Router();
const choresController = require("../../controllers/choresController");

// Matches with "/api/users"
router.route("/")
  .get(choresController.findAllUsers)
  .post(choresController.createUser);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(choresController.findByIdUser)
  .put(choresController.updateUser)
  .delete(choresController.removeUser);

// Matches with "/api/users/test/:username"
router.route("/test/:username")
  .get(choresController.findByUsernameUser);
  

module.exports = router;