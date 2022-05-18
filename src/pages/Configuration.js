import React from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
const Configuration = () => {
  return (
    <div className="p-16">
      <CardWithTitle title="Language">
        <div className="mt-6">
          <div className=" space-y-7">
            <div className="form-check ml-2">
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                English
              </label>
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-lg bg-white checked:bg-green-400 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="form-check ml-2">
              <label
                className="form-check-label inline-block text-gray-800"
                for="flexCheckDefault"
              >
                Spanish
              </label>
              <input
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-lg bg-white checked:bg-green-400 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-green-400 px-4 py-2 text-white font-semibold rounded-lg">
                Change
              </button>
            </div>
          </div>
        </div>
      </CardWithTitle>
      <div className="mt-6">
        <CardWithTitle title="Measurement units">
          <div className="mt-6">
            <div className=" space-y-7">
              <div className="form-check ml-2">
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  Matricas(Gramos)
                </label>
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-lg bg-white checked:bg-green-400 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="form-check ml-2">
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  Us(Onzas)
                </label>
                <input
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-lg bg-white checked:bg-green-400 checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-green-400 px-4 py-2 text-white font-semibold rounded-lg">
                  Change
                </button>
              </div>
            </div>
          </div>
        </CardWithTitle>
        <div className="mt-6">
          <CardWithTitle title="My servings">
            <div className="mt-10">
              <select
                id="Rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              >
                <option selected></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="bg-green-400 px-4 py-2 text-white font-semibold rounded-lg">
                Change
              </button>
            </div>
          </CardWithTitle>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
