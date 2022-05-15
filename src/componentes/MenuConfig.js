import { FaUserCircle } from "react-icons/fa";
import { BsFillHeartFill, BsFillGearFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { FaListAlt, FaRegBookmark } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";

const MenuConfig = ({ changeForm, show }) => {
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
            style={{ top: '100%', zIndex: 10, right: 0 }}
            className="absolute space-y-2 text-white bg-gray-800 w-48 border border-slate-300 rounded-md py-4"
        >
            <li className="space-x-2 border-b px-4">
                <a href="dfd" value="dfdf">
                    <div className="flex hover:text-main">
                        <FaUserCircle className="mt-1" />
                        <p className="ml-4 mb-4">My Profile</p>
                    </div>
                </a>
            </li>
            <li className="space-x-2 border-b px-4">
                <a href="dfd">
                    <div className="flex hover:text-main">
                        <BsFillGearFill className="mt-1" />
                        <p className="ml-4 mb-4">Configuración</p>
                    </div>

                </a>
            </li>
            <li className="space-x-2 border-b px-4">
                <a href="dfdf">
                    <div className="flex hover:text-main">
                        <BsFillCalendar2MinusFill className="mt-1" />
                        <p className="ml-4 mb-4">Overview</p>
                    </div>

                </a>
            </li>
            <li className="space-x-2 border-b px-4">
                <a href="dfdf">
                    <div className="flex hover:text-main">
                        <BsFillHeartFill className="mt-1" />
                        <p className="ml-4 mb-4">My Favorites</p>
                    </div>

                </a>
            </li>
            <li className="space-x-2 border-b px-4">
                <a href="dfdf">
                    <div className="flex hover:text-main">
                        <FaRegBookmark className="mt-1" />
                        <p className="ml-4 mb-4">Saved</p>
                    </div>

                </a>
            </li>
            <li className="space-x-2 border-b px-4">
                <a href="dfdf">
                    <div className="flex hover:text-main">
                        <FaListAlt className="mt-1" />
                        <p className="ml-4 mb-4">My Shopping List</p>
                    </div>

                </a>
            </li>
            <li className="space-x-2 border-b px-4">
                <a href="dfdf">
                    <div className="flex hover:text-main">
                        <BiMessageRoundedDetail className="mt-1" />
                        <p className="ml-4 mb-4">Contact</p>
                    </div>

                </a>
            </li>
            <li className="space-x-2 px-4">
                <a onClick={handleLougoutClick} href="">
                    <div className="flex hover:text-main">
                        <AiOutlineLogout className="mt-1" />
                        <p className="ml-4 ">Log Out</p>
                    </div>
                </a>
            </li>
        </ul >
    );
}

export default MenuConfig;
