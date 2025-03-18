import React from "react";
import { Link } from "react-router-dom";
import "../styles/table.scss"; // Import SASS styles

const MerchantTable = ({ merchants }) => {
  return (
    <div className="table-container">
      <h2>Merchants</h2>
      <table>
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Email</th>
            <th>Phone</th>
            {/* <th>Transactions</th> */}
          </tr>
        </thead>
        <tbody>
          {merchants.map((merchant) => (
            <tr key={merchant._id}>
              <td>{merchant.storeName}</td>
              <td>{merchant.email || "--"}</td>
              <td>{merchant.phone || "--"}</td>
              {/* <td>
                <Link
                  to={`/transactions/${merchant._id}`}
                  className="transaction-link"
                >
                  $
                  {merchant.transactions.reduce(
                    (total, txn) => total + txn.amount,
                    0
                  )}
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantTable;
