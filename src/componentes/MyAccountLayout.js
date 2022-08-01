import clsx from "clsx";
import { useEffect, useState } from "react";
import { BsFillHeartFill, BsFillGearFill, BsFillBookmarkHeartFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const MyAccountLayout = () => {
    const { setAuthInfo } = useAuth();

    const [currentPath, setCurrentPath] = useState("");

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location?.pathname);
        console.log(location);
    }, [location]);

    const handleLougoutClick = (e) => {
        e.preventDefault();

        setAuthInfo({ isAuthenticated: false, user: null, token: null });
    }

    return (
        <div className="flex">
            <div className="w-2/12 md:w-[5vw] bg-gray-700 hidden md:block text-white text-[2vw]" >
                <div className="">
                    <Link title="My Profile" to={'/accountinfo'}>
                        <IoPersonCircleSharp className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/accountinfo'
                        })}></IoPersonCircleSharp>
                    </Link>
                </div>
                <div>
                    <Link title="Setting" to={'/configuration'}>
                        <BsFillGearFill className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/configuration'
                        })}></BsFillGearFill>
                    </Link>
                </div>
                <div>
                    <Link title="Overview" to={'/overview'}>
                        <BsFillCalendar2MinusFill className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/overview'
                        })}></BsFillCalendar2MinusFill>
                    </Link>
                </div>
                <div>
                    <Link title="My Favorites" to={'/favorites'}>
                        <BsFillHeartFill className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/favorites'
                        })}></BsFillHeartFill>
                    </Link>
                </div>
                <div>
                    <Link title="Saved" to={'/saves'}>
                        <BsFillBookmarkHeartFill className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/saves'
                        })}></BsFillBookmarkHeartFill>
                    </Link>
                </div>


                <div>
                    <Link title="My Shopping List" to={'/shopping'}>
                        <FaListAlt className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/shopping'
                        })}></FaListAlt>
                    </Link>
                </div>
                <div>
                    <Link title="Contact" to={'/contactus'}>
                        <RiMessage2Fill className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/contactus'
                        })}></RiMessage2Fill>
                    </Link>
                </div>

                <div className="text-center">
                    <button title="Log Out" onClick={handleLougoutClick} className="mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl">
                        <AiOutlineLogout ></AiOutlineLogout>
                    </button>
                </div>

            </div>
            <div className="w-full min-w-0">
                <Outlet />
            </div>
        </div >
    );
}

export default MyAccountLayout;