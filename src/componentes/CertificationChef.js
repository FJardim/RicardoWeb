import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const CertificationChef = () => {
  return (
    <div className="mt-6">
      <button className="flex items-center space-x-2 text-black text-lg	 font-semibold">
        <BsPatchCheckFill className="text-teal-400" />
        <span>Professional Certification</span>
      </button>
      <div className=" mt-4">
        <h1>Chef 01020350 - San Jacinto</h1>
        <h1>College</h1>
      </div>
    </div>
  );
};
export default CertificationChef;
