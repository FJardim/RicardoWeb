//import { useState } from "react";
import NavSearchBar from "./NavSearchBar";
import PageLogo from "./PageLogo";
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavBar = () => {

    return (
        <div className="bg-gray-800 text-white h-14">
            <div className="container h-full">
                <div className="flex md:justify-none items-center h-full text-base">
                    <PageLogo />
                    <NavSearchBar />
                    <div className="flex ml-auto space-x-12 items-center h-full" >
                        <button className="hover:text-teal-400 ">Buy</button>
                        <button className="hover:text-teal-400 ">Sell</button>
                        <button className="hover:text-teal-400 ">Help</button>
                        <button className="hover:text-teal-400 "><BsBell className="h-6 w-6 ml-10" /></button>
                        <button className="flex items-center hover:text-teal-400 bg-transparent bg-gray-800 border border-slate-300 rounded-md
                          py-2 px-2.5"><FaUserCircle className="mr-2" /> Sr. Felicia Jardim <MdKeyboardArrowDown className="h-4 w-4" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
