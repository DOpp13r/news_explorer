import React from "react";
import "./RegistrationCompleteModal.css";
import closeButton from "../../assets/close-icon.svg";

function RegistrationCompleteModal({ isOpen, onClose, handleSignInClick }) {
  if (!isOpen) return null;
  return (
    <div className="registration__complete-modal">
      <div className="registration__complete-container">
        <button
          className="registration__complete-close"
          type="button"
          onClick={onClose}
        >
          <img
            className="registration__complete-close-icon"
            src={closeButton}
            alt="Close"
          />
        </button>
        <h2 className="registration__complete-header">
          Registration successfully completed!
        </h2>
        <button
          className="registration__complete-button"
          type="button"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default RegistrationCompleteModal;
