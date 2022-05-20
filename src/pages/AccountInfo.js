import React from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import FormAccount from "../componentes/FormAccount";
import PasswordUser from "../componentes/PasswordUser";
import PaypalUser from "../componentes/PaypalUser";

const AccountInfo = () => {
  return (
    <div className="container p-20 h-full w-full mb-20">
      <p className="text-4xl font-bold text-black mb-12">My Profile</p>
      <CardWithTitle title="My personal Information">
        <FormAccount
          sourseimg="Añadir Imagen"
          textname="Nombre:"
          textphone="Phone:"
          textaccount="Instagram User:"
          textbutton="Change"
        />
      </CardWithTitle>
      <div className="mt-6">
        <CardWithTitle title="My Paypal User">
          <PaypalUser textuser="User" textbutton="Change" />
        </CardWithTitle>
      </div>
      <div className="mt-6">
        <CardWithTitle title="My Password">
          <PasswordUser
            title="Write Actual Pasword"
            text="Write New Pasword"
            spam="Confirm New Pasword"
          />
        </CardWithTitle>
      </div>
    </div>
  );
};

export default AccountInfo;
