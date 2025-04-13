import "./ModalWithForm.css";
import closeButton from "../../assets/close-icon.svg";

function ModalWithForm({
  isOpen,
  title,
  onClose,
  onSubmit,
  children,
  buttonText,
  changeModal,
  secondButtonText,
  loginError,
  isValid,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-icon" src={closeButton} alt="close" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <p className="modal__login-error">{loginError}</p>
          {buttonText && secondButtonText && (
            <div className="modal__submit_container">
              <button
                className="modal__submit"
                type="submit"
                disabled={!isValid}
              >
                {buttonText}
              </button>
              <p className="modal__footer">
                {"or "}
                <span
                  className="modal__change"
                  type="button"
                  onClick={changeModal}
                >
                  {secondButtonText}
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
