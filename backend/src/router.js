const express = require("express");

const router = express.Router();
const { validateLogin } = require("./services/validator");

const { verifyPassword } = require("./services/auth");

const { getUserByEmailMiddleWare } = require("./controllers/authControllers");

// Public routes
// Auth
router.post("/login", validateLogin, getUserByEmailMiddleWare, verifyPassword);

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
