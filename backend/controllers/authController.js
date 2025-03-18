const User = require("../models/user");
const Merchant = require("../models/merchant");
const Customer = require("../models/customer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

// Admin Signup (Only Admin can create Admin, Merchant, or Customer)
exports.signupAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if Admin exists (Only an Admin can create another Admin)
    const existingAdmin = await User.findOne({ role: "admin" });
    if (!existingAdmin) {
      return res
        .status(403)
        .json({ message: "Only Admins can create new Admins" });
    }

    const newUser = new User({ name, email, password, role: "admin" });
    await newUser.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Admin Creates Merchant
exports.createMerchant = async (req, res) => {
  try {
    const { name, email, password, storeName, phone } = req.body;
    const newUser = new User({ name, email, password, role: "merchant" });
    await newUser.save();

    const newMerchant = new Merchant({ user: newUser._id, storeName, phone });
    await newMerchant.save();

    res.status(201).json({ message: "Merchant created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Admin Creates Customer (Must be linked to a Merchant)
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, password, merchantId, phone } = req.body;

    // Check if Merchant exists
    const merchant = await Merchant.findById(merchantId);
    if (!merchant)
      return res.status(404).json({ message: "Merchant not found" });

    const newUser = new User({ name, email, password, role: "customer" });
    await newUser.save();

    const newCustomer = new Customer({
      user: newUser._id,
      merchant: merchantId,
      phone,
    });
    await newCustomer.save();

    res.status(201).json({ message: "Customer created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// User Signin
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.json({ message: "Login successful", token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// User Logout (Client-side token removal)
exports.logout = (req, res) => {
  res.json({ message: "Logout successful" });
};
