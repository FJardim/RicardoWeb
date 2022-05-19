import React from "react";
import ButtonChange from "../componentes/ButtonChange";
import { CardWithTitle } from "../componentes/CardWithTitle";
import Config from "../componentes/Config";

const Configuration = () => {
  return (
    <div className="container p-20 h-full w-full mb-20">
      <p className="text-4xl font-bold text-black mb-12">Configuration</p>
      <CardWithTitle title="Language">
        <Config title="English" spam="Spanish" />
      </CardWithTitle>
      <div className="mt-6">
        <CardWithTitle title="Measurement units">
          <Config title="Metricas (Gramos)" spam="US (Onzas)" />
        </CardWithTitle>
        <div className="mt-6">
          <CardWithTitle title="My servings">
            <div className="mt-10">
              <select
                id="Rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              >
                <option selected></option>
                <option value="">hola</option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
            <div className="flex justify-end ">
              <ButtonChange />
            </div>
          </CardWithTitle>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
