import React from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import CardPaypal from "../componentes/CardPaypal";
import CardOrder from "../componentes/CardOrder";
import Details from "../componentes/Details";
import CardProduct from "../componentes/CardProduct";
import CardResum from "../componentes/CardResum";
const PaymentMethod = () => {
  return (
    <div className="p-8 flex mt-14 ml-8 mb-12">
      <div className="w-1/2">
        <CardWithTitle>
          <CardPaypal title="Add Paypal" text="Modificar" />
        </CardWithTitle>
        <div className="mt-6 ">
          <CardWithTitle title="Order Sellers">
            <CardOrder title="Sellers" chef="Anya Taylor" />
            <div className="grid grid-cols-2">
              <CardProduct title="Products" food="Lasagna" />

              <Details
                level="Level"
                categories="Categoria"
                fitness="Lunch"
                time="time"
                days="60-90 days"
                ingredients="Ingredients"
                number="6"
              />
            </div>
          </CardWithTitle>
        </div>
      </div>

      <div className=" ml-8 w-4/12">
        <CardWithTitle>
          <CardResum title="Orden Resum" total="Total a Pagar" price="$35.23" />
        </CardWithTitle>
      </div>
    </div>
  );
};

export default PaymentMethod;
