import React from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import CardPaypal from "../componentes/CardPaypal";
import CardOrder from "../componentes/CardOrder";
import Details from "../componentes/Details";
import CardProduct from "../componentes/CardProduct";
import CardResum from "../componentes/CardResum";

const PaymentMethod = () => {
  return (
    <div className="p-8 md:flex mt-14 ml-8 mb-12">
      <div className="md:w-1/2">
        <CardPaypal title="Add Paypal" text="Modificar" />

        <div className="mt-6 ">
          <CardWithTitle title="Order Sellers">
            <CardOrder title="Sellers" chef="Anya Taylor" />
            <div className="md:grid md:grid-cols-2">
              <CardProduct title="Products" food="Lasagna" />
              <Details
                level="Level"
                categories="Categoria"
                fitness="Lunch"
                time="Time"
                days="60-90 days"
                ingredients="Ingredients"
                number="6"
                price="$36.66"
             />
            </div>
          </CardWithTitle>
        </div>
      </div>

      <div className=" ml-8 md:w-4/12">
        <CardResum title="Orden Resum" total="Total a Pagar" price="$35.23" />
      </div>
    </div>
  );
};

export default PaymentMethod;
