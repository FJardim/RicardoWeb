import React from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import FormAccount from "../componentes/FormAccount";
import PasswordUser from "../componentes/PasswordUser";
import PaypalUser from "../componentes/PaypalUser";

const AccountInfo = () => {
  return (
    <div className="p-8">
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

      {/*  <UserProfile
        title="My personal Information"
        fieldname="Nombre:"
        fieldnumber="Phone:"
        fielduser="Instagram User:"
      />
      <ConfigInformation title="My Paypal User" fielduser="User:" />
      <ConfigInformation title="My Passwords" fielduser="Write Actual Password:" /> */}
    </div>
  );
};

export default AccountInfo;
