import axiosInstance from "../utils/axiosInstance";

// Fetch all merchants
export const fetchMerchants = async () => {
  try {
    const response = await axiosInstance.get("/merchants");
    return response.data;
  } catch (error) {
    console.error("Error fetching merchants:", error);
    throw error;
  }
};

// Fetch merchant by customerId
export const fetchMerchantByCustomerId = async (customerId) => {
  try {
    const response = await axiosInstance.get(`/merchants/${customerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching merchant details:", error);
    throw error;
  }
};
