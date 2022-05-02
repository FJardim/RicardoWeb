import React from "react";
import PageLogo from "./PageLogo";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 flex justify-between items-center text-white mt-auto p-5">
      <div className="container h-full">
        <div className="flex items-center">
          <PageLogo />
          <b className="ml-4">Ricardo APP</b>
        </div>
        <div className="flex justify-between items-top my-4">
          <div>
            <ul>
              <li className="font-bold my-4">Get in touch</li>
              <li className="my-4">About Us</li>
              <li className="my-4">Careers</li>
              <li className="my-4">Press Releases</li>
              <li className="my-4">Blog</li>
            </ul>
          </div>
          <div className="">
            <ul className="">
              <li className="font-bold my-4">Connections</li>
              <li className="my-4 flex">
                <SiFacebook className="h-6 w-6 hover:text-teal-400 cursor-pointer mr-1" />{" "}
                Facebook
              </li>
              <li className="my-4 flex">
                <SiTwitter className="h-6 w-6 hover:text-teal-400 cursor-pointer mr-1" />{" "}
                Twitter
              </li>
              <li className="my-4 flex">
                <SiInstagram className="h-6 w-6 hover:text-teal-400 cursor-pointer mr-1" />{" "}
                Instagram
              </li>
              <li className="my-4 flex">
                <IoLogoYoutube className="h-6 w-6 hover:text-teal-400 cursor-pointer mr-1" />{" "}
                Youtube
              </li>
              <li className="my-4 flex">
                <FaLinkedinIn className="h-6 w-6 hover:text-teal-400 cursor-pointer mr-1" />{" "}
                LinkedinIn
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold my-4">Earnings</li>
              <li className="my-4">Become an Affiliate</li>
              <li className="my-4">Advertise your product</li>
              <li className="my-4">Sell on Market</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-bold my-4">Account</li>
              <li className="my-4">Your account</li>
              <li className="my-4">Returns Centre</li>
              <li className="my-4">100 % purchase protection</li>
              <li className="my-4">Chat with us</li>
              <li className="my-4">Help</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 ">
          <p>&copy; 2022 <span className='text-teal-400'>Ricardo APP.</span> All rights reserved. Designed by JV, AN, LV & FJ.</p>
        </div>
      </div>
    </footer>
  );
}
