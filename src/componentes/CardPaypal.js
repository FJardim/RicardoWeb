import React from "react";
import paypal from "../assets/paypal.png";
const CardPaypal = ({ title, text }) => {
  return (
    <div className="flex">
      <img src={paypal} alt="" className="w-20" />
      <div className="mt-6 flex space-x-56 font-semibold">
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p className="text-main cursor-pointer">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPaypal;
