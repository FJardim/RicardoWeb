import { useRef } from "react";
import SearchMovil from "./SearchMovil";
import ReactDom from "react-dom";
import LoginBg from "../assets/img1.png";

const MovilMenuSearch = ({ show, onClose }) => {

    const modalRef = useRef();

    if (!show) {
        return null;
    }

    const handleClose = (e, forceClose) => {
        if (forceClose) {
            onClose();
            return;
        }


        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10 p-10" style={{ top: 0, left: 0, overflowY: 'auto' }}>
            <div className="h-96 w-full m-auto" style={{ backgroundImage: `url(${LoginBg})`, backgroundPosition: 'center center', backgroundSize: 'cover', background: 'rgba(0, 0, 0, 0.3)' }}>
                <SearchMovil />
            </div>
        </div>
        ,
        document.getElementById("portal")
    );

}
export default MovilMenuSearch;