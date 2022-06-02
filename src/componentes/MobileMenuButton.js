import { useState, useRef, useEffect } from "react";
import { IoMenu, IoApps, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { GoPerson } from "react-icons/go";
import { AiOutlineLogout } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkHeartFill, BsFillGearFill, BsFillCalendar2MinusFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { FaListAlt } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const MobileMenuButton = () => {

    const { user, setAuthInfo } = useAuth();

    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const modalRef = useRef();

    useEffect(() => {
        const handleMousedown = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowMenuMobile(false);
            }
        }

        document.addEventListener('mousedown', handleMousedown);

        return () => document.addEventListener('mousedown', handleMousedown);
    }, [modalRef]);
    return (
        <div ref={modalRef} className="relative">
            <button className="btn text-white md:hidden" onClick={() => setShowMenuMobile((oldShow) => !oldShow)}>
                <IoMenu className="text-2xl" />
            </button>
            {
                showMenuMobile &&
                <ul className="md:hidden absolute right-0 bg-black text-white px-2 py-2 z-20 rounded animate__animated animate__fadeIn" style={{ top: '100%' }}>
                    {
                        user ?

                            <div>
                                <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                    <Link to={"/accountinfo"} className="flex items-center space-x-2 hover:text-main">
                                        <FaUserCircle />
                                        <span>My Profile</span>
                                    </Link>
                                </li>
                                <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                    <Link to={"/configuration"} className="flex items-center space-x-2 hover:text-main">
                                        <BsFillGearFill />
                                        <span>Setting</span>
                                    </Link>

                                </li>
                                <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                    <Link to={'/overview'} className="flex items-center space-x-2 hover:text-main">
                                        <BsFillCalendar2MinusFill />
                                        <span>Overview</span>
                                    </Link>
                                </li>
                                <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                    <Link to={"/favorites"} className="flex items-center space-x-2 hover:text-main">
                                        <IoHeart />
                                        <span>My Favorites</span>
                                    </Link>
                                </li>
                                <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                    <Link to={'/saves'} className="flex items-center space-x-2 hover:text-main">
                                        <BsFillBookmarkHeartFill />
                                        <span>Saved</span>

                                    </Link>
                                </li>
                                <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                    <Link to={'/shopping'} className="flex items-center space-x-2 hover:text-main">
                                        <FaListAlt />
                                        <span>My Shopping List</span>
                                    </Link>
                                </li>
                                <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                    <Link to={'/contactus'} className="flex items-center space-x-2 hover:text-main">
                                        <RiMessage2Fill />
                                        <span>Contact</span>
                                    </Link>
                                </li>

                            </div>
                            :
                            <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                <Link to={`?showLogin=true`} className="flex items-center space-x-2 hover:text-main">
                                    <IoLogIn />
                                    <span>Log In / Registratión</span>
                                </Link>
                            </li>
                    }
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/categories'} className="flex items-center space-x-2 hover:text-main">
                            <IoApps />
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/sellers'} className="flex items-center space-x-2 hover:text-main">
                            <GoPerson />
                            <span>Sellers</span>
                        </Link>
                    </li>
                    {
                        user &&
                        <li className="py-2">
                            <button className="flex items-center space-x-2 " onClick={() => { setAuthInfo({ isAuthenticated: false, user: null, token: null }); }}>
                                <AiOutlineLogout />
                                <span>Log Out</span>
                            </button>
                        </li>
                    }
                </ul>
            }
        </div >
    )
}

export default MobileMenuButton;