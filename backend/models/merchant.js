const mongoose = require("mongoose");

const MerchantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  storeName: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Merchant", MerchantSchema);
