import ButtonSearch from "./ButtonSearch";
import Logo from "../assets/drafts.png";
import { BiSearchAlt } from "react-icons/bi";

const SearchMovil = () => {

    return (
        <div>
            <div className="bg-main">
                <div className="flex h-full w-full bg-black bg-opacity-50 p-4">
                    <div className="m-auto" >
                        <img src={Logo} className="m-auto rounded-2xl" alt="RicardoApp" />
                        <h1 className="text-4xl text-center text-white font-bold">Ricardo App</h1>
                        <p className="font-light text-sm text-center text-white">Search Recipes, Ingredients, Plans and Combos.</p>
                    </div>
                </div>
            </div>
            <div className="w-full p-2 m-auto">
                <ButtonSearch />
                <div className="relative text-white text-center text-base">
                    <input
                        className='text-black text-xs h-12 border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 
                            leading-4 border-0 rounded-bl-lg rounded-r-lg w-full top-0 right-0'
                        type="text"
                        placeholder="Enter the item you are looking for or a characteristic..." />
                    <button
                        className="absolute h-full px-2 text-center bg-main top-0 right-0 rounded-r-lg font-semibold">
                        <BiSearchAlt
                            className="h-6 w-6 md:ml-10"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchMovil;