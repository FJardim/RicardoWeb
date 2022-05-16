import NavSearchBar from "./NavSearchBar";
import PageLogo from "./PageLogo";
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import AuthModal from "./AuthModal";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MenuConfig from "./MenuConfig";

const NavBar = () => {
    const { user } = useAuth();

    const [showModal, setShowModal] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    const handleLogin = () => {
        if (!user) {
            setShowModal((oldShowModal) => !oldShowModal);
            return;
        }
        setShowMenu((oldShowMenu) => !oldShowMenu);
    }

    return (
        <>
            <div className="bg-gray-800 text-white h-14">
                <div className="container h-full">
                    <div className="flex md:justify-none items-center h-full text-base">
                        <PageLogo />
                        <NavSearchBar />
                        <div className="flex ml-auto space-x-12 items-center h-full" >
                            <Link to={"/Categories"} className="hover:text-main ">Categories</Link>
                            <Link to={"/Sellers"} className="hover:text-main ">Sellers</Link>
                            <button className="hover:text-main "><BsBell className="h-6 w-6 ml-10" /></button>
                            <button onClick={handleLogin} className="flex relative items-center hover:text-main bg-transparent 
                                    bg-gray-800 border border-slate-300 rounded-md py-2 px-2.5">
                                <FaUserCircle className="mr-2" />
                                {user ? user.name : 'Iniciar Sesion'}
                                <MenuConfig show={showMenu} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal show={showModal} onClose={handleLogin} />
        </>
    );
}

export default NavBar;
