import clsx from "clsx";
import { useEffect, useState } from "react";
import { BsFillHeartFill, BsFillGearFill, BsFillBookmarkHeartFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";

const MyAccountLayout = () => {

    const [currentPath, setCurrentPath] = useState("");

    const [show, setShow] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location?.pathname);
        console.log(location);
    }, [location]);

    return (
        <div className="flex">
            <div className="w-2/12 md:w-[5vw] bg-gray-700 text-white text-[2vw]" >
                <div>
                    <Link title="My Profile" to={'/my-account/info'}>
                        <IoPersonCircleSharp className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/my-account/info'
                        })}></IoPersonCircleSharp>
                    </Link>
                </div>
                <div>
                    <Link title="Setting" to={'/my-account/address'}>
                        <BsFillGearFill className={clsx(["mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl"], {
                            'text-main': currentPath === '/my-account/address'
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
                    <button title="Log Out" onClick={() => { setShow(true) }} className="mx-auto my-6 cursor-pointer transform hover:text-main hover:scale-150 transition duration-500 text-3xl md:text-2xl">
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