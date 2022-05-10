import Logo from "../assets/drafts.png";
import LoginBg from "../assets/img1.png";
import PageLogo from "../componentes/PageLogo";


const LoginForm = ({ changeForm }) => {
    return (
        <div className="m-auto grid grid-cols-2 w-2/3 bg-teal-400">
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
                    <h1 className="mt-4 text-2xl text-white font-bold">Login</h1>
                    <div className="mx-1 my-2 h-px w-0.2 bg-white"></div>
                </div>
                <div className="text-white ">
                    <p className="font-bold mt-4">E-Mail Address</p>
                    <div className="border border-slate-100 rounded-md text-white py-2 px-2">
                        <p>E-Mail Address</p>
                    </div>
                    <p className="font-bold">Password</p>
                    <div className="border border-slate-100 rounded-md text-white py-2 px-2">
                        <p>Password</p>
                    </div>
                </div>
                <div className="flex mx-2 my-2">
                    <div className="cursor-pointer mt-1.5 ml-2 border border-slate-100 rounded text-white h-4 w-4">
                    </div>
                    <p className="text-white ml-2" >remember me</p>
                </div>
                <div className="text-center">
                    <button className="bg-slate-50 px-2 py-1 rounded">sing in</button>
                    <div className="px-2 py-1 mb-2 text-white">
                        <p className="mb-2 cursor-pointer">I forgot my password?</p>
                        <p className="mb-2">You do not have an account?
                            <b className="cursor-pointer text-slate-700" onClick={() => { changeForm('register') }}> Sign up</b>
                        </p>
                        <div className=" mb-2 text-center">
                            <p>&copy; 2022 <b className='text-white'>Ricardo APP.</b> All rights reserved. Designed by JV, AN, LV & FJ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;