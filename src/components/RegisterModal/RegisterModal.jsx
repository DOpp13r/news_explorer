import React, { useState } from "react";
import "./RegisterModal.css";
import closeButton from "../../assets/close-icon.svg";

const RegisterModal = ({ isOpen, onClose, handleSignInClick }) => {
  if (!isOpen) return null;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const disabledButton = !email || !password || !username;

  return (
    <div className="register__modal">
      <div className="register__modal-container">
        <button className="register__modal-close">
          <img
            className="register__close-icon"
            src={closeButton}
            onClick={onClose}
          />
        </button>
        <h2 className="register__modal-header">Sign Up</h2>
        <form className="register__modal-form">
          <label className="register__modal-label">
            Email{" "}
            <input
              className="register__modal-input"
              id="sign-up email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </label>
          <label className="register__modal-label">
            Password{" "}
            <input
              className="register__modal-input"
              id="sign-up password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </label>
          <label className="register__modal-label">
            Username{" "}
            <input
              className="register__modal-input"
              id="sign-up username"
              type="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </label>
          <button className="register__modal-submit" disabled={disabledButton}>
            Sign Up
          </button>
          <div className="register__modal-footer">
            <p>
              or{" "}
              <span
                className="register__modal-change"
                onClick={handleSignInClick}
              >
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
