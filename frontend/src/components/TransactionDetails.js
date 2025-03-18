import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchAllTransactionsByCustomerId,
  fetchAllTransactionsByMerchantId,
} from "../api/transaction";

const TransactionDetails = () => {
  const { id } = useParams();

  const [customerDetails, setCustomerDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllTransactionsByMerchantId(id)
      .then((data) => {
        setCustomerDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <h2>Customer not found</h2>;
  }

  return (
    <div className="table-container">
      <h2>Transactions for {customerDetails?.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {customerDetails.transactions.map((txn) => (
            <tr key={txn._id}>
              <td>{new Date(txn.date).toLocaleDateString()}</td>
              <td>${txn.amount}</td>
              <td>{txn.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionDetails;
