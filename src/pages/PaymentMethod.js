import React from "react";
import paypal from "../assets/Img-button/paypal-3.png";
const PaymentMethod = () => {
  return (
    <div className="bg-white w-1/2 h-40 rounded-lg mt-6 mb-6 ml-6">
      <div>
        <div className="flex p-10">
          <img src={paypal} className="h-20 w-30" />
          <div className="flex p-4 space-x-44  font-semibold">
            <h1 className="">Add Paypal</h1>
            <div className="">
              <h1 className="text-main top-0 right-0">Modificar</h1>
            </div>
            <div className="bg-white w-1/2">
              <h1>hola</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
