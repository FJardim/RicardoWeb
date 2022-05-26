import { BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";

const NavInfo = () => {
    return (
        <div className="bg-main text-black py-4">
            <div className="container relative font-semibold text-base">
                <div className="flex items-center cursor-pointer absolute -mt-3  ">
                    <BiMap className="text-white h-8 w-8 mt-2" />
                    <div className="flex flex-col text-white ">

                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap">
                    <nav className="flex items-center space-x-10  md:space-x-20">
                        <Link to={"/recipes"}>
                            <p>Recipes</p>
                        </Link>
                        <Link to={"/plans"}>
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
