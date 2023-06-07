const express = require("express");

const router = express.Router();

// routes pour Wines
const wineControllers = require("./controllers/wineControllers");

router.get("/wines", wineControllers.browse);
router.get("/wines/:id", wineControllers.read);
router.put("/wines/:id", wineControllers.edit);
router.post("/wines", wineControllers.add);
router.delete("/wines/:id", wineControllers.destroy);

// routes pour Users
const userControllers = require("./controllers/userControllers");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

// routes pour TastingSheet
const tastingSheetControllers = require("./controllers/tastingSheetControllers");

router.get("/tastingsheets", tastingSheetControllers.browse);
router.get("/tastingsheets/:id", tastingSheetControllers.read);
router.put("/tastingsheets/:id", tastingSheetControllers.edit);
router.post("/tastingsheets", tastingSheetControllers.add);
router.delete("/tastingsheets/:id", tastingSheetControllers.destroy);

module.exports = router;
