import React from "react";
import { RiBookReadLine } from "react-icons/ri";

const DescriptionChef = () => {
  return (
    <div className="mt-10">
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <RiBookReadLine className="text-main" />
        <span>Description</span>
      </button>
      <div className="mt-4 text-justify px-2">
        I am a nutrition specialist and chef graduated from San Jacinto College,
        with 10 years of experience developing meal plans. I am a nutrition
        specialist and chef graduated from San Jacinto College, with 10 years of
        experience developing meal plans.
      </div>
    </div>
  );
};

export default DescriptionChef;
