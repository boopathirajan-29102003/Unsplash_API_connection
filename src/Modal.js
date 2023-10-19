const Modal = ({ onClose, children }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <button type="button" className="close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;