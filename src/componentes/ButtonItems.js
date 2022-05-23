import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonSearchSelector from "./ButtonSearchSelector";

const ButtonItems = () => {
  const [category, setCategory] = useState('ingredients');

  return (
    <div className="text-base m-0 rounded-tl-lg h-12 rounded-t-lg flex">
      <Link to={"/sellers/:slug/recipes"}>
        <ButtonSearchSelector
          onClick={() => setCategory('recipes')}
          name="Recipes"
          isActive={category === 'recipes'}
        />
      </Link>

      <Link to={"/sellers/:slug/plans"}>
        <ButtonSearchSelector
          onClick={() => setCategory('plans')}
          name="Plans"
          isActive={category === 'plans'}
        />
      </Link>

      <Link to={"/sellers/:slug/combos"}>
        <ButtonSearchSelector
          onClick={() => setCategory('recipes')}
          name="Combos"
          isActive={category === 'combos'}
        />
      </Link>
    </div>
  );
};

export default ButtonItems;
