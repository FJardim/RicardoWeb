import clsx from "clsx";
import { useState } from "react";

const ButtonSearch = () => {

    const [category, setCategory] = useState('ingredients');

    return (
        <div className="text-base m-0 rounded-tl-lg bg-zinc-300 w-96 h-12 justify-center space-x-4 rounded-t-lg flex ">
            <button
                onClick={() => { setCategory('ingredients') }}
                style={{
                    borderRadius: category === 'ingredients' && `10px 0 0 0`
                }}
                className={clsx(['px-2'], {
                    'bg-white w-full rounded-tl-lg underline underline-offset-8 decoration-main': category === 'ingredients'
                })}>
                <p>Ingredients</p>
            </button>
            <button
                onClick={() => { setCategory('plans') }}
                style={{
                    borderRadius: category === 'plans' && `0 0 0 0`
                }}
                className={clsx(['px-2'], {
                    'bg-white w-full underline underline-offset-8 decoration-main': category === 'plans'
                })}>
                <p>Recipes</p>
            </button>
            <button
                onClick={() => { setCategory('recipes') }}
                style={{
                    borderRadius: category === 'recipes' && `0 0 0 0`
                }}
                className={clsx(['px-2'], {
                    'bg-white w-20 underline underline-offset-8 decoration-main': category === 'recipes'
                })}>
                <p> Palls</p>
            </button>

            <button
                onClick={() => { setCategory('combos') }}
                style={{
                    borderRadius: category === 'combos' && `0 10px 0 0`
                }}
                className={clsx(['px-2'], {
                    'bg-white w-full underline underline-offset-8 decoration-teal-400': category === 'combos'
                })}>
                <p>Combos</p>
            </button>
        </div>
    );
}

export default ButtonSearch;