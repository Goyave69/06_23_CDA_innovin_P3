const express = require("express");

const multer = require("multer");

const router = express.Router();

const upload = multer({ dest: process.env.UPLOADS_FOLDER });

// routes pour Wines
const wineControllers = require("./controllers/wineControllers");
const fileControllers = require("./controllers/fileControllers");

router.get("/wines", wineControllers.browse);
router.get("/wines/:id", wineControllers.read);
router.put(
  "/wines/:id",
  upload.single("picture"),
  fileControllers.fileRename,
  wineControllers.edit
);
router.post(
  "/wines",
  upload.single("picture"),
  fileControllers.fileRename,
  wineControllers.add
);
router.delete("/wines/:id", wineControllers.destroy);

// routes pour Users
const userControllers = require("./controllers/userControllers");

const { hashPassword } = require("./services/PasswordHelper");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.post("/users", hashPassword, userControllers.add);
router.delete("/users/:id", userControllers.destroy);

// routes pour CartWines
const cartWineControllers = require("./controllers/cartWineControllers");

router.get("/cartwines", cartWineControllers.browse);
router.get("/cartwines/:id", cartWineControllers.read);
router.put("/cartwines/:id", cartWineControllers.edit);
router.post("/cartwines", cartWineControllers.add);
router.delete("/cartwines/:id", cartWineControllers.destroy);

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

// route pour login
const { verifyPassword } = require("./services/auth");
const authControllers = require("./controllers/authControllers");

router.post(
  "/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// route pour logout

router.post("/logout", authControllers.logout);

module.exports = router;
