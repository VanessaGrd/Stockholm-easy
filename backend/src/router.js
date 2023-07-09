const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

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
router.delete("/user/:id", activityControllers.destroy);
module.exports = router;
