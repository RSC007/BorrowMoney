import axiosInstance from "../utils/axiosInstance";

// Fetch all merchants
export const addTransaction = async () => {
  // payload
  // { merchantId, customerId, amount, description }
  try {
    const response = await axiosInstance.get("/transactions");
    return response.data;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};

// Get all transactions for a Merchant
export const fetchAllTransactionsByMerchantId = async (merchantId) => {
  try {
    const response = await axiosInstance.get(
      `/transactions/merchant/${merchantId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching merchant details:", error);
    throw error;
  }
};

// Get all transactions for a Customer
export const fetchAllTransactionsByCustomerId = async (customerId) => {
  try {
    const response = await axiosInstance.get(
      `/transactions/customer/${customerId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching customer details:", error);
    throw error;
  }
};
