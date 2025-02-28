import "./ModalWithForm.css";
import closeButton from "../../assets/close-icon.svg";

function ModalWithForm({
  children,
  buttonText,
  secondButtonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  changeModal,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-icon" src={closeButton} alt="close" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <div className="modal__submit_container">
            <button className="modal__submit" type="submit">
              {buttonText}
            </button>
            <button
              className="modal__change"
              type="button"
              onClick={changeModal}
            >
              {secondButtonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
