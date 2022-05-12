import React from "react";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.png";
import { IoGridOutline, IoList } from "react-icons/io5";
import ScrollNavigation from "../componentes/ScrollNavigation";
import SelectCategory from "../componentes/SelectCategory";
import SelectRank from "../componentes/SelectRank";
import CardGym from "../componentes/CardGym";
import girltraining from "../assets/girltraining.jpg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import CategoriesRecipes from "../componentes/CategoriesRecipes"

const Sellers = () => {
  return (
    <div className="">
      <BannerPage image={img1} title="Plans" />
      <div className="container p-8">
        <div className="flex justify-end space-x-6">
          <button className="flex items-center space-x-2 text-green-400">
            <IoGridOutline />
            <span>Grid View</span>
          </button>
          <button className="flex items-center space-x-2">
            <IoList />
            List View
          </button>
          <span>
            <b>117</b>
            Recipes
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2">
          <div>
            <div className="ml-6 bg-white w-48 rounded-lg ">
           <CategoriesRecipes />
            </div>
            <div>
              <div className="mt-6 ml-6 bg-white w-48 rounded-lg ">
                <h1 className="mb-2 ml-2">Types</h1>
                <SelectCategory title="Breakfast" />
                <SelectCategory title="Lunch" />
                <SelectCategory title="Dinner" />
                <SelectCategory title="Snacks" />
              </div>
            </div>
            <div>
              <div className="mt-6 ml-6 bg-white w-48 rounded-lg">
                <h1 className="mb-2 ml-2">Rating</h1>
                <SelectRank />
                <SelectRank />
                <SelectRank />
                <SelectRank />
                <SelectRank />
                <div className="flex space-x-8">
                  <button className="bg-teal-500 mt-14 mb-4 ml-2 text-white font-bold py-2 px-4 rounded-lg">
                    Apply
                  </button>
                  <button className="bg-white mt-14 mb-4 ml-2 text-black font-bold py-2 px-4 rounded-lg">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-10 mr-10 mb-20">
              {[...Array(9).keys()].map((numero, i) => {
                return (
                  <CardGym
                    foto={girltraining}
                    name="Weight Loss Plan"
                    description="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds"
                  />
                );
              })}
            </div>

            <div className="flex justify-center space-x-2 mb-6">
              <ScrollNavigation
                title={<MdKeyboardArrowLeft className="text-2xl" />}
              />
              <ScrollNavigation title="1" />
              <ScrollNavigation title="2" />
              <ScrollNavigation title="3" />
              <ScrollNavigation title="4" />
              <ScrollNavigation title="5" />
              <ScrollNavigation title="6" />
              <ScrollNavigation
                title={<MdKeyboardArrowRight className="text-2xl" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
