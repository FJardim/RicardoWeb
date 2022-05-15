import React from "react";
import PersonalInformation from "../componentes/PersonalInformation";
import UserProfile from "../componentes/UserProfile";

const AccountInfo = () => {
  return (
    <div>
      <PersonalInformation title="hola" textname="Nombre" />
      <UserProfile title=" My Paypal User" textphone="Phone" textuser="Instagram User"/>
    </div>
  );
};

export default AccountInfo;
