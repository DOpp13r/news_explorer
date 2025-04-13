import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  isOpen,
  onClose,
  handleSignUpClick,
  handleLogin,
  loginError,
  setLoginError,
  setIsSubmitting,
  isValid,
  setIsValid,
}) => {
  if (!isOpen) return null;

  const [loginUserValues, setLoginUserValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validLoginInputs = () => {
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
    setIsValid(isValid);
    return isValid;
  };

  const handleInputChange = (e) => {
    const newFormValues = {
      ...loginUserValues,
      [e.target.name]: e.target.value,
    };

    setLoginUserValues(newFormValues);
    validLoginInputs();
  };

  const submitLogin = (e) => {
    e.preventDefault();
    if (!validLoginInputs()) return;
    setLoginError("");
    handleLogin(loginUserValues, setIsSubmitting);
  };

  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={submitLogin}
      buttonText="Sign In"
      changeModal={handleSignUpClick}
      secondButtonText="Sign Up"
      loginError={loginError}
      isValid={isValid}
    >
      <label className="modal__label">
        Email{" "}
        <input
          className="modal__input"
          id="sign-in email"
          type="email"
          name="email"
          value={loginUserValues.email}
          onChange={handleInputChange}
          placeholder="Enter email"
          required
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password{" "}
        <input
          className="modal__input"
          id="sign-in password"
          type="password"
          name="password"
          value={loginUserValues.password}
          onChange={handleInputChange}
          placeholder="Enter password"
          required
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
