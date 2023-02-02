const express = require("express");

const router = express.Router();

// Profile
const profileControllers = require("./controllers/profileControllers");

router.get("/profile", profileControllers.getProfile);
router.put("/profile", profileControllers.updateProfile);

// Projects
const projectControllers = require("./controllers/projectControllers");

router.get("/projects", projectControllers.browse);
router.get("/projects/:id", projectControllers.read);
router.post("/projects", projectControllers.add);
router.put("/projects/:id", projectControllers.edit);
router.delete("/projects/:id", projectControllers.destroy);

// Posts
const postControllers = require("./controllers/postControllers");

router.get("/posts", postControllers.browse);
router.get("/posts/:id", postControllers.read);
router.post("/posts", postControllers.add);
router.put("/posts/:id", postControllers.edit);
router.delete("/posts/:id", postControllers.destroy);

module.exports = router;
