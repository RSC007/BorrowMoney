import React, { useState } from "react";

const AuthCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="auth-container">
      {/* Card */}
      <div className="auth-card">
        <h2>Welcome to Borrow App</h2>
        <p>Please sign in or sign up to continue</p>
        <div className="btn-group">
          <button
            className="btn btn-primary"
            onClick={() => openModal("signin")}
          >
            Sign In
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => openModal("signup")}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={`modal fade show d-block modal-md`} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modalType === "signin" ? "Sign In" : "Sign Up"}
                </h5>
              </div>
              <form className="modal-container">
                <div className="form-group mb-2">
                  <label>Email</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group mb-2">
                  <label>Password</label>
                  <input type="password" className="form-control" required />
                </div>
                {modalType === "signup" && (
                  <div className="form-group mb-2">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" required />
                  </div>
                )}
                <button type="submit" className="btn btn-primary w-100 mb-2">
                  {modalType === "signin" ? "Sign In" : "Sign Up"}
                </button>
                <button
                  className="btn btn-danger mt-2 w-100"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthCard;
