import React, { useState, useEffect, useCallback } from "react";
// import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  isOpen,
  onClose,
  handleSignInClick,
  handleRegister,
  setIsSubmitting,
  isValid,
  setIsValid,
}) => {
  const [createUserValues, setCreateUserValues] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
  });

  const validRegisterInputs = useCallback(() => {
    let isValid = true;
    const validateErrors = {
      email: "",
      password: "",
      username: "",
    };

    if (
      createUserValues.email.length < 5 ||
      createUserValues.email.length > 50
    ) {
      validateErrors.email = "Email must be between 5 and 50 characters long.";
      isValid = false;
    }

    if (createUserValues.password.length < 8) {
      validateErrors.password = "Password must be at least 8 characters long.";
      isValid = false;
    }

    if (
      createUserValues.username.length < 5 ||
      createUserValues.username.length > 25
    ) {
      validateErrors.username =
        "Username must be between 5 and 25 characters long.";
      isValid = false;
    }

    setErrors(validateErrors);
    setIsValid(isValid);
    return isValid;
  }, [createUserValues, setIsValid]);

  useEffect(() => {
    validRegisterInputs();
  }, [createUserValues]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCreateUserValues({ ...createUserValues, [name]: value });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    if (!validRegisterInputs()) return;
    setIsSubmitting(true);
    handleRegister(createUserValues)
      .catch((err) => {
        console.error("Registration error:", err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const resetForm = () => {
    setCreateUserValues({
      email: "",
      password: "",
      username: "",
    });
    setErrors({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={submitRegister}
      buttonText="Sign Up"
      changeModal={handleSignInClick}
      secondButtonText="Sign In"
      isValid={isValid}
    >
      <label className="modal__label">
        Email{" "}
        <input
          className="modal__input"
          id="sign-in email"
          type="email"
          name="email"
          value={createUserValues.email}
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
          value={createUserValues.password}
          onChange={handleInputChange}
          placeholder="Enter password"
          required
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      <label className="modal__label">
        Username{" "}
        <input
          className="modal__input"
          id="sign-up username"
          type="text"
          name="username"
          value={createUserValues.username}
          onChange={handleInputChange}
          placeholder="Enter your username"
          required
        />
        {errors.username && (
          <span className="modal__error">{errors.username}</span>
        )}
      </label>
    </ModalWithForm>
  );
};
// <div className="register__modal">
//   <div className="register__modal-container">
//     <button className="register__modal-close">
//       <img
//         className="register__close-icon"
//         src={closeButton}
//         alt="Close"
//         onClick={onClose}
//       />
//     </button>
//     <h2 className="register__modal-header">Sign Up</h2>
//     <form className="register__modal-form" onSubmit={submitRegister}>
//       <label className="register__modal-label">
//         Email{" "}
//         <input
//           className="register__modal-input"
//           id="sign-up email"
//           type="email"
//           name="email"
//           value={createUserValues.email}
//           onChange={handleInputChange}
//           placeholder="Enter email"
//           required
//         />
//         {errors.email && (
//           <span className="register__modal-error">{errors.email}</span>
//         )}
//       </label>
//       <label className="register__modal-label">
//         Password{" "}
//         <input
//           className="register__modal-input"
//           id="sign-up password"
//           type="password"
//           name="password"
//           value={createUserValues.password}
//           onChange={handleInputChange}
//           placeholder="Enter password"
//           required
//         />
//         {errors.password && (
//           <span className="register__modal-error">{errors.password}</span>
//         )}
//       </label>
//       <label className="register__modal-label">
//         Username{" "}
//         <input
//           className="register__modal-input"
//           id="sign-up username"
//           type="text"
//           name="username"
//           value={createUserValues.username}
//           onChange={handleInputChange}
//           placeholder="Enter your username"
//           required
//         />
//         {errors.username && (
//           <span className="register__modal-error">{errors.username}</span>
//         )}
//       </label>
//       <button
//         className="register__modal-submit"
//         type="submit"
//         disabled={isDisabled}
//       >
//         Sign Up
//       </button>
//       <div className="register__modal-footer">
//         <p>
//           or{" "}
//           <span
//             className="register__modal-change"
//             type="button"
//             onClick={handleSignInClick}
//           >
//             Sign in
//           </span>
//         </p>
//       </div>
// </form>
// </div>
// </div>
//   );
// };

export default RegisterModal;
