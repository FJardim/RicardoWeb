import { BiMap } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NavInfo = () => {

    const [currentPath, setCurrentPath] = useState(""); //pat escucha 

    const location = useLocation();
    useEffect(() => {
        setCurrentPath(location?.pathname);
    }, [location]);

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
                            <p className={clsx({
                                "text-white": currentPath === '/recipes',
                                'text-black': currentPath !== '/recipes'
                            })}>
                                Recipes
                            </p>
                        </Link>

                        <Link to={"/plans"}>
                            <p className={clsx({
                                "text-white": currentPath === '/plans',
                                'text-black': currentPath !== '/plans'
                            })}>
                                Plans
                            </p>
                        </Link>
                        <Link to={"/combos"}>
                            <p className={clsx({
                                "text-white": currentPath === '/combos',
                                'text-black': currentPath !== '/combos'
                            })}>
                                Combos</p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div >
    );
}

export default NavInfo;
