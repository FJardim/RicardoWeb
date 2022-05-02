import React from "react";
import { FaRegStar } from "react-icons/fa";

const SelectRank = ({ title }) => {
  return (
    <div className="justify-center">
      <div>
        <div className="form-check ml-2">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-400 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            <div className="flex text-yellow-300">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectRank;
