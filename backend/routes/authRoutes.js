const express = require("express");
const authController = require("../controllers/authController");
const { authMiddleware, adminAuth } = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/signup/admin",
  authMiddleware,
  adminAuth,
  authController.signupAdmin
);
router.post(
  "/signup/merchant",
  authMiddleware,
  adminAuth,
  authController.createMerchant
);
router.post(
  "/signup/customer",
  authMiddleware,
  adminAuth,
  authController.createCustomer
);

router.post("/signin", authController.signin);
router.post("/logout", authController.logout);

module.exports = router;
