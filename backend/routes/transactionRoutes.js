const express = require("express");
const Transaction = require("../models/transaction");
const Merchant = require("../models/merchant");
const Customer = require("../models/customer");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// Create Transaction
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { merchantId, customerId, amount, description } = req.body;

    const merchant = await Merchant.findById(merchantId);
    const customer = await Customer.findById(customerId);

    if (!merchant || !customer) {
      return res
        .status(404)
        .json({ message: "Merchant or Customer not found" });
    }

    const transaction = new Transaction({
      merchant: merchantId,
      customer: customerId,
      amount,
      description,
    });
    await transaction.save();

    res
      .status(201)
      .json({ message: "Transaction recorded successfully", transaction });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get Transactions for a Merchant
router.get("/merchant/:merchantId", authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.find({
      merchant: req.params.merchantId,
    }).populate("customer", "user");
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Get Transactions for a Customer
router.get("/customer/:customerId", authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.find({
      customer: req.params.customerId,
    }).populate("merchant", "user");
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
