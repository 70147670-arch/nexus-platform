const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const {
  createTransaction,
  getTransactions
} = require("../controllers/transactionController");


// INVESTOR ONLY
router.post(
  "/",
  authMiddleware,
  roleMiddleware("investor"),
  createTransaction
);


// BOTH ROLES
router.get(
  "/",
  authMiddleware,
  roleMiddleware("investor", "entrepreneur"),
  getTransactions
);

module.exports = router;