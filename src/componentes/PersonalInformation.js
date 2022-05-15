import React from "react";
import profile from "../assets/profile.png";

const PersonalInformation = ({ title, textname }) => {
  return (
    <div className="bg-white rounded-lg p-3 align-center">
      <p>{title}</p>
      <div className="flex">
        <img src={profile} alt="" className="w-20 h-20" />
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Añadir Imagen</button>

        </div>

        <div>
         <div>
          <p>{textname}</p>
          </div>
          <label>
            <input type="text" className=" rounded-lg " />
          </label>
        </div>
      
    </div>
  );
};

export default PersonalInformation;
