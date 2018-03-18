const router = require("express").Router();
const choreRoutes = require("./chores");
const userRoutes = require("./users");
const aboutRoutes = require("./about");


// both routes
router.use("/chores", choreRoutes);
router.use("/users", userRoutes);
router.use("/about", aboutRoutes);

module.exports = router;
