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
            <div className="container relative">
                <div className="flex items-center cursor-pointer absolute -mt-4  ">
                    <BiMap className="text-white h-10 w-10 mt-2" />
                    <div className="flex flex-col text-white ">

                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap">
                    <nav className="flex items-center space-x-10  md:space-x-20">

                        <Link to={"/combos"}>
                            <p className={clsx({
                                "text-white title-medium md:text-lg": currentPath === '/combos',
                                "text-black title-medium md:text-lg": currentPath !== '/combos'
                            })}>
                                Combos</p>
                        </Link>

                        <Link to={"/plans"}>
                            <p className={clsx({
                                "text-white title-medium md:text-lg": currentPath === '/plans',
                                "text-black title-medium md:text-lg": currentPath !== '/plans'
                            })}>
                                Plans
                            </p>
                        </Link>

                        <Link to={"/recipes"}>
                            <p className={clsx({
                                "text-white title-medium md:text-lg": currentPath === '/recipes',
                                "text-black title-medium md:text-lg": currentPath !== '/recipes'
                            })}>
                                Recipes
                            </p>
                        </Link>
                    </nav>
                </div>
            </div>
        </div >
    );
}

export default NavInfo;
