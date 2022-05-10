import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavInfo = () => {
    return (
        <div className="bg-teal-400 text-white py-4">
            <div className="container relative font-semibold text-base">
                <div className="flex items-center cursor-pointer relative md:absolute -mt-3  ">
                    <BiMap className="h-8 w-8" />
                    <div className="flex flex-col text-white ">
                        <span>Delive to </span>
                        <span>Seatle</span>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap">
                    <nav className="flex items-center space-x-7">
                        <Link to={"/recipes"}>
                            <p>Recipes</p>
                        </Link>
                        <Link to={""}>
                            <p>Plans</p>
                        </Link>
                        <Link to={"/combos"}>
                            <p>Combos</p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default NavInfo;
