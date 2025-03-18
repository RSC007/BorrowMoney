const express = require("express");
const Merchant = require("../models/merchant");

const router = express.Router();

// Create a Merchant
router.post("/", async (req, res) => {
  try {
    const merchant = new Merchant(req.body);
    await merchant.save();
    res.status(201).json(merchant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Merchants
router.get("/", async (req, res) => {
  const merchants = await Merchant.find();
  res.json(merchants);
});

module.exports = router;
