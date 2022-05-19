import React from "react";
import paypal from "../assets/paypaltransp.png";

const CardResum = ({title, total, price}) => {
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
        <img src={paypal} alt="" className="w-40 bg-main rounded-lg p-3 cursor-pointer" />
      </div>
    </div>
  );
};

export default CardResum;
