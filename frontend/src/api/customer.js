import axiosInstance from "../utils/axiosInstance";

// Fetch all merchants
export const fetchMerchants = async () => {
  try {
    const response = await axiosInstance.get("/customers");
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

// Fetch merchant by customerId
export const fetchMerchantByCustomerId = async (customerId) => {
  try {
    const response = await axiosInstance.get(`/customers/${customerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer details:", error);
    throw error;
  }
};
