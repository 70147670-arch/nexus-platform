const Transaction = require("../models/Transaction");


// CREATE TRANSACTION
exports.createTransaction = async (req, res) => {

  try {

    const {
      amount,
      type,
      userId
    } = req.body;

    const transaction = await Transaction.create({

      amount,
      type,
      userId,

    });

    res.status(201).json({

      message: "Transaction successful",

      transaction,

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// GET TRANSACTIONS
exports.getTransactions = async (req, res) => {

  try {

    const transactions = await Transaction.findAll();

    res.json(transactions);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};
