const express = require("express");

const router = express.Router();
const { validateLogin } = require("./services/validator");

const { verifyPassword, verifyToken, logout } = require("./services/auth");

const { getUserByEmailMiddleWare } = require("./controllers/authControllers");

// Public routes
// Auth
router.post("/login", validateLogin, getUserByEmailMiddleWare, verifyPassword);
router.get("/logout", verifyToken, logout);
// Users
const userControllers = require("./controllers/userControllers");
const { validateUser } = require("./services/validators");
const { hashPassword } = require("./services/auth");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.post("/user", validateUser, hashPassword, userControllers.add);
router.delete("/user/:id", userControllers.destroy);
module.exports = router;

// Activity
const activityControllers = require("./controllers/activityControllers");

router.get("/activity", activityControllers.browse);
router.get("/activity/:id", activityControllers.read);
router.post("/activity", activityControllers.add);
router.put("/activity/:id", activityControllers.edit);
router.delete("/activity/:id", activityControllers.destroy);
module.exports = router;

// Food
const foodControllers = require("./controllers/foodControllers");

router.get("/food", foodControllers.browse);
router.get("/food/:id", foodControllers.read);
router.post("/food", foodControllers.add);
router.put("/food/:id", foodControllers.edit);
router.delete("/food/:id", foodControllers.destroy);
module.exports = router;
// Program
const programControllers = require("./controllers/programControllers");

router.get("/program", programControllers.browse);
router.get("/program-user/:id", programControllers.browseProgram);
router.get("/program/:id", programControllers.read);
router.post("/program", programControllers.add);
router.post("/program", programControllers.addFood);
router.put("/program/:id", programControllers.edit);
router.delete("/program/:id", programControllers.destroy);
module.exports = router;
