import { FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkHeartFill, BsFillGearFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { FaListAlt } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import { IoHeart } from "react-icons/io5";
import { Link } from "react-router-dom";

const MenuConfig = ({ show }) => {
    const { setAuthInfo } = useAuth();

    if (!show) {
        return null;
    }

    const handleLougoutClick = (e) => {
        e.preventDefault();

        setAuthInfo({ isAuthenticated: false, user: null, token: null });
    }

    return (
        <ul
            style={{ top: '100%' }}
            className="absolute space-y-2 z-20 right-0 text-white bg-gray-800 w-52 border border-slate-300 rounded-md py-4"
        >
            <li className="space-x-2 border-b px-4">
                <Link to={"/accountinfo"}>
                    <div className="flex hover:text-main">
                        <FaUserCircle className="mt-1" />
                        <p className="text-lg ml-2.5 mb-1.5">My Profile</p>
                    </div>
                </Link>
            </li>
            <li className="space-x-2 border-b px-4">
                <Link to={"/configuration"}>
                    <div className="flex hover:text-main">
                        <BsFillGearFill className="mt-1" />
                        <p className="text-lg ml-2.5 mb-1.5">Setting</p>
                    </div>
                </Link>

            </li>
            <li className="space-x-2 border-b px-4">
                <Link to={'/overview'}>
                    <div className="flex hover:text-main">
                        <BsFillCalendar2MinusFill className="mt-1" />
                        <p className="text-lg ml-2.5 mb-1.5">Overview</p>
                    </div>

                </Link>
            </li>
            <li className="space-x-2 border-b px-4">
                <Link to={"/favorites"}>
                    <div className="flex hover:text-main">
                        <IoHeart className="mt-1" />
                        <p className="text-lg ml-2.5 mb-1.5">My Favorites</p>
                    </div>
                </Link>
            </li>
            <li className="space-x-2 border-b px-4">
                <Link to={'/saves'}>
                    <div className="flex hover:text-main">
                        <BsFillBookmarkHeartFill className="mt-1" />
                        <p className="text-lg ml-2.5 mb-1.5">Saved</p>
                    </div>
                </Link>
            </li>
            <li className="space-x-2 border-b px-4">
                <Link to={'/shopping'}>
                    <div className="flex hover:text-main">
                        <FaListAlt className="mt-1" />
                        <p className="text-lg ml-2.5 mb-1.5">My Shopping List</p>
                    </div>

                </Link>
            </li>
            <li className="space-x-2 border-b px-4">
                <Link to={'/contactus'}>
                    <div className="flex hover:text-main">
                        <RiMessage2Fill className="mt-1" />
                        <p className="text-lg ml-2.5 mb-1.5">Contact</p>
                    </div>

                </Link>
            </li>
            <li className="space-x-2 px-4">
                <a onClick={handleLougoutClick} href="dfdf">
                    <div className="flex hover:text-main">
                        <AiOutlineLogout className="mt-1" />
                        <p className="text-lg ml-2.5">Log Out</p>
                    </div>
                </a>
            </li>
        </ul >
    );
}

export default MenuConfig;
