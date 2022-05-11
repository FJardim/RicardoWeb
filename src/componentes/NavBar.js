import NavSearchBar from "./NavSearchBar";
import PageLogo from "./PageLogo";
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import AuthModal from "./AuthModal";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [showModal, setShowModal] = useState(false);

    const handleLogin = () => {
        setShowModal((oldShowModal) => !oldShowModal);
    }

    return (
        <>
            <div className="bg-gray-800 text-white h-14">
                <div className="container h-full">
                    <div className="flex md:justify-none items-center h-full text-base">
                        <PageLogo />
                        <NavSearchBar />
                        <div className="flex ml-auto space-x-12 items-center h-full" >
                            <Link to={"/Categories"} className="hover:text-teal-400 ">Categories</Link>
                            <Link to={"/Sellers"} className="hover:text-teal-400 ">Sellers</Link>
                            <button className="hover:text-teal-400 "><BsBell className="h-6 w-6 ml-10" /></button>
                            <button onClick={handleLogin} className="flex items-center hover:text-teal-400 bg-transparent bg-gray-800 border border-slate-300 rounded-md
                          py-2 px-2.5"><FaUserCircle className="mr-2" /> Iniciar Sesion</button>
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal show={showModal} onClose={handleLogin} />
        </>
    );
}

export default NavBar;
