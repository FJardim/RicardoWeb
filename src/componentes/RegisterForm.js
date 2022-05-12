import Logo from "../assets/drafts.png";
import LoginBg from "../assets/img1.png";
import PageLogo from "../componentes/PageLogo";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";

const RegisterForm = ({ changeForm }) => {
    return (
        <div className="m-auto grid grid-cols-2  bg-main">
            <div style={{ backgroundImage: `url(${LoginBg})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className="flex h-full w-full bg-black bg-opacity-50 p-4">
                    <div className="m-auto" >
                        <img src={Logo} className="m-auto rounded-2xl" alt="RicardoApp" />
                        <h1 className="text-4xl text-center text-white font-bold">Ricardo App</h1>
                        <p className="font-light text-sm text-center text-white">the best platform to grow your Recipes.</p>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="text-center">
                    <PageLogo centered />
                    <h1 className="mt-4 text-2xl text-white font-bold">Registration</h1>
                    <div className="mx-1 my-2 h-px w-0.2 bg-white"></div>
                </div>
                <div className="mt-2 grid grid-cols-2 text-white ">
                    <div className="mx-2 my-2">
                        <p className="font-bold">Name and Surname:</p>
                        <div className="cursor-pointer border border-slate-100 rounded-md text-white py-2 px-2">
                            <p>Name</p>
                        </div>
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">E-Mail Address</p>
                        <div className="cursor-pointer border border-slate-100 rounded-md text-white py-2 px-2">
                            <p>E-Mail Address</p>
                        </div>
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">Password</p>
                        <div className="cursor-pointer border border-slate-100 rounded-md text-white py-2 px-2">
                            <p>Password</p>
                        </div>
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">Confirm Password:</p>
                        <div className="cursor-pointer border border-slate-100 rounded-md text-white py-2 px-2">
                            <p>Confirm Password</p>
                        </div>
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">Contact number and WhatsApp:</p>
                        <div className="cursor-pointer border border-slate-100 rounded-md text-white py-2 px-2">
                            <p className="flex"><AiOutlineWhatsApp className="m-1" />+ 000 000 00000000</p>
                        </div>
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">User Instagram:</p>
                        <div className="cursor-pointer border border-slate-100 rounded-md text-white py-2 px-2">
                            <p className="flex"><AiOutlineInstagram className="m-1" />@xxxxxxxxxxxx</p>
                        </div>
                    </div>
                    <div className="mx-2 my-2">
                        <p className="font-bold">User PayPal:</p>
                        <div className="cursor-pointer border border-slate-100 rounded-md text-white py-2 px-2">
                            <p className="flex"><BsPaypal className="m-1" />xxxxx@xxxx.xxx</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-slate-50 px-2 py-1 rounded"> sing in</button>
                    <div className="px-2 py-1 mb-2 text-white">
                        <p className="mb-2">You do not have an account? <b className="cursor-pointer text-slate-700" onClick={() => { changeForm('login') }}>Sign in</b></p>
                        <div className=" mb-2 text-center">
                            <p>&copy; 2022 <b className='text-white'>Ricardo APP.</b> All rights reserved. Designed by JV, AN, LV & FJ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;