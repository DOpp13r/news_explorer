import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegistrationCompleteModal({ isOpen, onClose, handleSignInClick }) {
  if (!isOpen) return null;
  return (
    <ModalWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSignInClick}
    >
      <button
        className="modal__complete-button"
        type="button"
        onClick={handleSignInClick}
      >
        Sign in
      </button>
    </ModalWithForm>
  );
}

export default RegistrationCompleteModal;
