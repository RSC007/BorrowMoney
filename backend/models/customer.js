const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Merchant",
    required: true,
  },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Customer", CustomerSchema);
