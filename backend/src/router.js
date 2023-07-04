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

const { hashPassword } = require("./services/PasswordHelper");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

// routes pour Carts

const cartControllers = require("./controllers/cartControllers");

router.get("/carts", cartControllers.browse);
router.get("/carts/:id", cartControllers.read);
router.put("/carts/:id", cartControllers.edit);
router.post("/carts", cartControllers.add);
router.delete("/carts/:id", cartControllers.destroy);

// routes pour Orders

const orderControllers = require("./controllers/orderControllers");

router.get("/orders", orderControllers.browse);
router.get("/orders/:id", orderControllers.read);
router.put("/orders/:id", orderControllers.edit);
router.post("/orders", orderControllers.add);
router.delete("/orders/:id", orderControllers.destroy);

// routes pour TastingSheet
const tastingSheetControllers = require("./controllers/tastingSheetControllers");

router.get("/tastingsheets", tastingSheetControllers.browse);
router.get("/tastingsheets/:id", tastingSheetControllers.read);
router.put("/tastingsheets/:id", tastingSheetControllers.edit);
router.post("/tastingsheets", tastingSheetControllers.add);
router.delete("/tastingsheets/:id", tastingSheetControllers.destroy);

// routes pour login
const { verifyPassword } = require("./services/auth");
const authControllers = require("./controllers/authControllers");

router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

module.exports = router;
