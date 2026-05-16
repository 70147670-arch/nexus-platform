const express = require("express");

const router = express.Router();

const {
  register,
  login
} = require("../controllers/authController");


/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: User registered successfully
 */


// REGISTER
router.post("/register", register);


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Login successful
 */


// LOGIN
router.post("/login", login);

module.exports = router;