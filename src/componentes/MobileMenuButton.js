import { useState } from "react";
import { IoMenu, IoApps, IoPersonCircleSharp, IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const MobileMenuButton = () => {

    const { user, setAuthInfo } = useAuth();

    const [showMenuMobile, setShowMenuMobile] = useState(false);

    return (
        <div className="relative">
            <button className="btn text-white md:hidden" onClick={() => setShowMenuMobile((oldShow) => !oldShow)}>
                <IoMenu className="text-2xl" />
            </button>
            {
                showMenuMobile &&
                <ul className="md:hidden absolute right-0 bg-white text-gray-500 px-2 py-2 z-10 rounded animate__animated animate__fadeIn" style={{ top: '100%' }}>
                    {
                        user ?
                            <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                <Link to={'/my-account'} className="flex items-center space-x-2">
                                    <IoPersonCircleSharp />
                                    <span>Mi Cuenta</span>
                                </Link>
                            </li>
                            :
                            <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                                <Link to={`?showLogin=true`} className="flex items-center space-x-2">
                                    <IoLogIn />
                                    <span>Iniciar Sesion / Registrarse</span>
                                </Link>
                            </li>
                    }
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/categories'} className="flex items-center space-x-2">
                            <IoApps />
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li className="py-2 border-b" style={{ minWidth: '180px' }}>
                        <Link to={'/sellers'}>
                            Sellers
                        </Link>
                    </li>
                    {
                        user &&
                        <li className="py-2 border-b">
                            <button onClick={() => { setAuthInfo({ isAuthenticated: false, user: null, token: null }); }}>
                                Cerrar Sesión
                            </button>
                        </li>
                    }
                </ul>
            }
        </div >
    )
}

export default MobileMenuButton;