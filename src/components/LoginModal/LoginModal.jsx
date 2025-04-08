import React, { useState } from "react";
import "./LoginModal.css";
import closeButton from "../../assets/close-icon.svg";

const LoginModal = ({ isOpen, onClose, handleSignUpClick, handleLogin }) => {
  if (!isOpen) return null;

  const [loginUserValues, setLoginUserValues] = useState({
    email: "",
    password: "",
  });

  const isDisabled = !loginUserValues.email || !loginUserValues.password;

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginUserValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validLoginInputs = () => {
    // Check if email is valid
    let isValid = true;
    const validateErrors = {
      email: "",
      password: "",
    };

    if (loginUserValues.email.length < 5 || loginUserValues.email.length > 50) {
      validateErrors.email = "Email must be between 5 and 50 characters long.";
      isValid = false;
    }

    if (loginUserValues.password.length < 8) {
      validateErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    setErrors(validateErrors);
    return isValid;
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (!validLoginInputs()) return;
    setIsSubmitting(true);
    handleLogin(loginUserValues, setIsSubmitting, () => {
      setLoginUserValues({ email: "", password: "" });
    });
  };

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
        <form className="login__modal-form" onSubmit={submitLogin}>
          <label className="login__modal-label">
            Email{" "}
            <input
              className="login__modal-input"
              id="sign-in email"
              type="email"
              name="email"
              value={loginUserValues.email}
              onChange={handleInputChange}
              placeholder="Enter email"
              required
            />
            {errors.email && (
              <span className="login__modal-error">{errors.email}</span>
            )}
          </label>
          <label className="login__modal-label">
            Password{" "}
            <input
              className="login__modal-input"
              id="sign-in password"
              type="password"
              name="password"
              value={loginUserValues.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              required
            />
            {errors.password && (
              <span className="login__modal-error">{errors.password}</span>
            )}
          </label>
          <button
            className="login__modal-submit"
            type="submit"
            disabled={isDisabled}
          >
            Sign In
          </button>
          <div className="login__modal-footer">
            <p>
              or{" "}
              <span
                className="login__modal-change"
                type="button"
                onClick={handleSignUpClick}
              >
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
