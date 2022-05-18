import React from "react";
import CheckboxConfig from "../componentes/CheckboxConfig";

const LanguageConfig = ({ title, spam }) => {
  return (
    <div className="mt-6">
      <div className=" space-y-7">
        <div className="grid grid-cols-4 ml-4">
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            {title}
          </label>
           <div>
          <CheckboxConfig />
          </div>
        </div>
        <div className="grid grid-cols-4 ml-4">
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            {spam}
          </label>
           <div>
          <CheckboxConfig />
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="bg-main px-4 py-2 text-white font-semibold rounded-lg">
            Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageConfig;
