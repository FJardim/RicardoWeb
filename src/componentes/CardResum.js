import React, { useState } from "react";
import paypal from "../assets/paypaltransp.png";
import PaypalModal from "./PaypalModal";

const CardResum = ({title, total, price}) => {
  const [showPaypalModal, setShowPaypalModal] = useState(false);
  
  return (
    <div>
      <div>
        <p className="mb-8 ml-4 text-lg">{title}</p>
      </div>
      <div className="flex justify-between ml-5 mr-5">
        <p>{total}</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center mt-10 mb-8">
        <img
          src={paypal}
          alt=""
          className="w-40 bg-main rounded-lg p-3 cursor-pointer"
          onClick={() => setShowPaypalModal(true)}
        />
      </div>

      <PaypalModal show={showPaypalModal} onClose={() => setShowPaypalModal(false)} />
    </div>
  );
};

export default CardResum;
