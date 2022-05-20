import React from "react";
import { FaRegStar } from "react-icons/fa";
import Checkbox from "./Checkbox";

const SelectRank = () => {
  return (
    <div className="flex ">
      <div className="justify-end form-check ml-2">
        <Checkbox className="mb-4" />
      </div>
      <div className="flex text-yellow-300 ml-2">
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
