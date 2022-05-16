import AppLogo from "../assets/drafts.png";
import { BsCalendarPlus, BsBookmark, BsFillShareFill, BsBasket } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import Matches from "./Matches";
import womenchef from "../assets/womenchef.jpg";

const CardRecipes = ({ texto, parrafo, foto, title, hideButtons = false }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden">
            <div
                style={{ backgroundImage: `url(${foto})`, backgroundSize: "100% 100%" }}
                className="h-40 relative">
                <div className="relative h-full w-full bg-black bg-opacity-20 flex">
                    <div className="absolute left-0 top-1 w-full justify-center items-center flex">
                        <img src={AppLogo} className="h-10 w-10" alt="AppLogo" />
                    </div>
                    <div className="absolute z-10 top-3 right-3 flex justify-end space-x-4 text-white">
                        <AiOutlineShopping />
                        <BsBasket />
                    </div>
                    <h1 className="m-auto text-2xl text-white font-semibold">{title}</h1>
                    <div className="absolute w-full bottom-0 bg-black bg-opacity-40">
                        <h1 className="ml-4 text-white">{texto}</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className=" flex text-bold">
                                <img className="rounded-full h-8 w-8 " src={womenchef} alt="" />
                                <h1 className="p-1 text-white">Anya Taylor</h1>
                            </div>
                            <div className="flex justify-end text-white space-x-4">
                                <BsFillShareFill />
                                <BsCalendarPlus />
                                <div className="">
                                    <BsBookmark className="m-auto" />
                                    <p>8.7K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                {!hideButtons &&
                    <div>
                        <Matches />
                    </div>}
            </div>
        </div>
    );
};
export default CardRecipes;
