import React from "react";
import { FaRegStar } from "react-icons/fa";
import Checkbox from "./Checkbox";

const SelectRank = () => {
  return (
    <div className="flex ">
      <div className="justify-end form-check md:px-1 px-2">
        <Checkbox className="mb-4" />
      </div>
      <div className="flex text-yellow-300 lg:ml-2 md:ml-0 md:text-lg text-xl  md:space-x-1 space-x-2">
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>

    </div >
  );
};

export default SelectRank;
