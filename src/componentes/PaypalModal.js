import { useRef } from "react";
import { createPortal } from "react-dom";
import PaypalLogin from "./PaypalLogin";
const PaypalModal = ({ show, onClose }) => {
  const modalRef = useRef();

  if (!show) {
    return null;
  }

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div
      ref={modalRef}
      onClick={handleClose}
      className="flex items-center justify-center h-screen w-screen bg-black bg-opacity-50 fixed z-10"
      style={{ top: 0, left: 0 }}
    >
      <div className="max-w-xl w-full bg-white rounded p-6">
       <PaypalLogin
       title="Pay with PayPal"
       help="Forgot Password" 
       login="Sign In" 
       create="Create an Account"
       
       />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default PaypalModal;
