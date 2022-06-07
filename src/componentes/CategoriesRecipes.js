import React from "react";

const CategoriesRecipes = () => {
  return (
    <div className="mb-4 md:p-6">
      <h4 className="title-medium mt-2 mb-6">Categories</h4>
      <div className="font-normal cursor-pointer hover:text-main m-2">New Recipes</div>
      <div className="font-normal cursor-pointer hover:text-main m-2">Low in Calories </div>
      <div className="font-normal cursor-pointer hover:text-main m-2">Paleo</div>
      <div className="font-normal cursor-pointer hover:text-main m-2">High in Proteccion</div>
      <div className="font-normal cursor-pointer hover:text-main m-2">See All</div>
    </div>
  );
};

export default CategoriesRecipes;
