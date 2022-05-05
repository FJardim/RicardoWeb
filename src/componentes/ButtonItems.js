import React from "react";

const ButtonItems = () => {
  return (
    <div className="bg-zinc-300 w-60 h-12 justify-center space-x-4 rounded-t-lg flex ">
      <button>
        <p>Recipes</p>
      </button>
      <button>
        <p>Plans</p>
      </button>
      <button>
        <p>Combos</p>
      </button>
    </div>
  );
};

export default ButtonItems;
