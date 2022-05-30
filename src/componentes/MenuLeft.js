import ButtonRank from "./ButtonRank";
import CategoriesRecipes from "./CategoriesRecipes";
import SelectCategory from "./SelectCategory";
import SelectRank from "./SelectRank";

const MenuLeft = () => {
    return (
        <div>
            <div className="md:ml-6 bg-white md:w-64 rounded-lg shadow">
                <CategoriesRecipes />
            </div>
            <div>
                <div className="p-4 mt-6 md:ml-6 bg-white md:w-64 rounded-lg shadow">
                    <p className="text-xl font-semibold mt-2 mb-6">Types</p>
                    <SelectCategory title="Breakfast" />
                    <SelectCategory title="Lunch" />
                    <SelectCategory title="Dinner" />
                    <SelectCategory title="Snacks" />
                </div>
            </div>
            <div>
                <div className="p-4 mt-6 md:ml-6 bg-white md:w-64 rounded-lg shadow">
                    <h1 className="text-xl font-semibold mt-2 mb-6">Rating</h1>
                    <SelectRank />
                    <SelectRank />
                    <SelectRank />
                    <SelectRank />
                    <SelectRank />
                    <div className="p-3">
                        <ButtonRank />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuLeft;