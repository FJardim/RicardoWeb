import React from "react";

const CategoriesRecipes = () => {
  return (
    <div className="md:p-6">
      <h4 className="text-xl font-semibold mt-2 mb-6">Categories</h4>
      <div className="font-normal cursor-pointer hover:text-main">New Recipes</div>
      <div className="font-normal cursor-pointer hover:text-main">Low in Calories </div>
      <div className="font-normal cursor-pointer hover:text-main">Paleo</div>
      <div className="font-normal cursor-pointer hover:text-main">High in Proteccion</div>
      <div className="font-normal cursor-pointer hover:text-main">See All</div>
    </div>
  );
};

export default CategoriesRecipes;
