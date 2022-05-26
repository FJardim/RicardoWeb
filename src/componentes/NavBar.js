import NavSearchBar from "./NavSearchBar";
import PageLogo from "./PageLogo";
import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import AuthModal from "./AuthModal";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import MenuConfig from "./MenuConfig";
import MobileMenuButton from "./MobileMenuButton";

const NavBar = () => {

    const { user } = useAuth();

    const [searchParams] = useSearchParams();

    const [showModal, setShowModal] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setShowModal(searchParams?.get('showLogin'));
    }, [searchParams])

    const handleToggleModal = () => {
        setShowModal((oldShowModal) => !oldShowModal);
        return;
    }

    const handleToggleMenu = () => {
        setShowMenu((oldShowMenu) => !oldShowMenu);
    }

    return (
        <>
            <div className="bg-gray-800 text-white h-14 px-4">
                <div className="container h-full">
                    <div className="flex md:justify-none items-center h-full text-base">
                        <PageLogo />
                        <NavSearchBar />
                        <div className="flex ml-auto space-x-12 items-center h-full" >
                            <Link to={"/Categories"} className="hidden md:block hover:text-main ">Categories</Link>
                            <Link to={"/Sellers"} className="hidden md:block hover:text-main ">Sellers</Link>
                            <button className="hover:text-main "><BsBell className="h-6 w-6 ml-10" /></button>
                            <button onClick={user ? handleToggleMenu : handleToggleModal} className="hidden md:block relative items-center hover:text-main bg-transparent 
                                    bg-gray-800 border border-slate-300 rounded-md py-2 px-2.5">
                                <FaUserCircle className="mr-2" />
                                {user ? user.name : 'Log in'}
                                <MenuConfig show={showMenu} />
                            </button>
                            <MobileMenuButton />
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal show={showModal} onClose={handleToggleModal} />
        </>
    );
}

export default NavBar;
