const express = require("express");
const Customer = require("../models/customer");

const router = express.Router();

// Create a Customer
router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Customers
router.get("/", async (req, res) => {
  const customers = await Customer.find().populate("merchant");
  res.json(customers);
});

module.exports = router;
