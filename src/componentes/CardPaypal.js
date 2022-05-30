import React from "react";
import paypal from "../assets/paypal.png";
const CardPaypal = ({ title, text }) => {
  return (
    <div className="bg-white shadow p-3 rounded-lg ">
    <div className="flex">
      <img src={paypal} alt="" className="w-20" />
      <div className="mt-6 flex space-x-56 font-semibold">
        <div className="md:flex md:space-x-56">
          <p>{title}</p>
          <p className="text-main cursor-pointer">{text}</p>
        </div>
        <div>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardPaypal;
