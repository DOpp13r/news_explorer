import React, { useState } from "react";
import "./LoginModal.css";
import closeButton from "../../assets/close-icon.svg";

const LoginModal = ({ isOpen, onClose, handleSignUpClick }) => {
  if (!isOpen) return null;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disabledButton = !email || !password;

  return (
    <div className="login__modal">
      <div className="login__modal-container">
        <button className="login__modal-close">
          <img
            className="login__close-icon"
            src={closeButton}
            onClick={onClose}
          />
        </button>
        <h2 className="login__modal-header">Sign In</h2>
        <form className="login__modal-form">
          <label className="login__modal-label">
            Email{" "}
            <input
              className="login__modal-input"
              id="sign-in email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </label>
          <label className="login__modal-label">
            Password{" "}
            <input
              className="login__modal-input"
              id="sign-in password"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </label>
          <button className="login__modal-submit" disabled={disabledButton}>
            Sign In
          </button>
          <div className="login__modal-footer">
            <p>
              or{" "}
              <span className="login__modal-change" onClick={handleSignUpClick}>
                Sign up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
