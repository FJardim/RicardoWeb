import { useState } from "react";
import NavSearchBar from "./NavSearchBar";
import PageLogo from "./PageLogo";
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiMap } from "react-icons/bi";

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
            <div className="bg-teal-400 text-white py-4">
                <div className="container relative font-semibold text-base">
                    <div className="flex items-center cursor-pointer relative md:absolute -mt-3  ">
                        <BiMap className="h-8 w-8" />
                        <div className="flex flex-col text-white ">
                            <span>Delive to </span>
                            <span>Seatle</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-wrap">
                        <nav className="flex items-center space-x-7">
                            <a href="/">Offers of the day</a>
                            <a href="/#">Customer service</a>
                            <a href="/##">Stores</a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
