import { useState } from "react";
import ButtonSearchSelector from "./ButtonSearchSelector";

const ButtonSearch = () => {
    const [category, setCategory] = useState('ingredients');

    return (
        <div className="text-base m-0 rounded-tl-lg h-12 rounded-t-lg flex">
            <ButtonSearchSelector
                onClick={() => setCategory('ingredients')}
                name="Ingredients"
                isActive={category === 'ingredients'}
            />
            <ButtonSearchSelector
                onClick={() => setCategory('recipes')}
                name="Recipes"
                isActive={category === 'recipes'}
            />
            <ButtonSearchSelector
                onClick={() => setCategory('plans')}
                name="Plans"
                isActive={category === 'plans'}
            />
            <ButtonSearchSelector
                onClick={() => setCategory('combos')}
                name="Combos"
                isActive={category === 'combos'}
            />
        </div>
    );
}

export default ButtonSearch;