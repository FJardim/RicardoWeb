import clsx from "clsx";

const TabButton = ({ setIngredientsPriceContent, ingredientsPriceContent }) => {
    return (
        <div className='bg-gray-50 py-4 grid grid-cols-3 gap-2 ml-auto'>
            <div className='flex justify-end'>
                <button
                    className={clsx(
                        'bg-teal-400 items-center px-2 py-2 rounded-xl text-white font-bold border border-1 hover:text-teal-400 hover:border-teal-400 hover:bg-white',
                        ingredientsPriceContent === 'stores' && 'text-teal-400 border-teal-400 bg-white'
                    )}
                    onClick={() => setIngredientsPriceContent('stores')}
                >
                    Stores
                </button>
            </div>
            <div className='flex justify-end'>
                <button
                    className={clsx(
                        'bg-teal-400 items-center px-2 py-2 rounded-xl text-white font-bold border border-1 hover:text-teal-400 hover:border-teal-400 hover:bg-white',
                        ingredientsPriceContent === 'best-offer' && 'text-teal-400 border-teal-400 bg-white'
                    )}
                    onClick={() => setIngredientsPriceContent('best-offer')}
                >

                    The best offer
                </button>
            </div>
        </div>
    );
}

export default TabButton;