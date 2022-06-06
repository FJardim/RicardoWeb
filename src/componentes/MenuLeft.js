import ButtonRank from "./ButtonRank";
import CategoriesRecipes from "./CategoriesRecipes";
import SelectCategory from "./SelectCategory";
import SelectRank from "./SelectRank";

const MenuLeft = () => {
    return (
        <div>
            <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow ">
                <CategoriesRecipes />
            </div>
            <div>
                <div className="p-4 mt-6 lg:ml-6 bg-white lg:w-64 m-auto w-56 md:w-40 rounded-lg shadow">
                    <p className="title-medium mt-2 mb-6">Types</p>
                    <SelectCategory title="Breakfast" />
                    <SelectCategory title="Lunch" />
                    <SelectCategory title="Dinner" />
                    <SelectCategory title="Snacks" />
                </div>
            </div>
            <div>
                <div className="p-4 mt-6 lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow">
                    <h1 className="title-medium mt-2 mb-6">Rating</h1>
                    <SelectRank num="2" />
                    <SelectRank num="3" />
                    <SelectRank num="4" />
                    <SelectRank num="5" />
                    <SelectRank num="6" />
                    <div className="p-3">
                        <ButtonRank />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuLeft;