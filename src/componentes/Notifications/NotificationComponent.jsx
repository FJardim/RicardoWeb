import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import useOutsideAlerter from "../../helpers/useOutsideAlerter";

const NotificationComponent = () => {

    const { user } = useAuth();

    const modalRef = useRef();

    const [showNotifications, setShowNotifications] = useState(false);

    useOutsideAlerter(modalRef, () => {
        setTimeout(() => {
            setShowNotifications(false)
        }, [100])
    });

    if (!user) return null;

    return (
        <div className="relative">
            <button
                onClick={() => setShowNotifications((oldValue) => !oldValue)}
                className={clsx(["hover:text-main"], {
                    "text-main": showNotifications
                })}
            >
                <div className="absolute bg-red-500 text-white rounded-full h-6 w-6 flex" style={{ top: '-10px', right: '-10px' }}>
                    <p className="m-auto">10</p>
                </div>
                <BsBell className="h-6 w-6" />
            </button>
            {
                showNotifications &&
                <ul
                    ref={modalRef}
                    style={{
                        minWidth: '300px',
                        maxHeight: '400px',
                        overflowY: 'auto'
                    }}
                    className="absolute z-50 bg-white text-black custom-scrollbar custom-scrollbar-main right-0 px-8 py-4 rounded-xl shadow"
                >
                    <li>
                        <h3 className="text-xl font-bold">Mis notificaciones</h3>
                    </li>
                    <li className="my-4 border-b">
                        <Link to="#">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold">
                                    Titulo
                                </h4>
                                <p className="text-main">Nueva</p>
                            </div>
                            <p>Mensaje de la notificacion.</p>
                        </Link>
                    </li>
                    <li className="my-4 border-b">
                        <Link to="#">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold">
                                    Titulo
                                </h4>
                                <p className="text-main">Nueva</p>
                            </div>
                            <p>Mensaje de la notificacion.</p>
                        </Link>
                    </li>
                    <li className="my-4 border-b">
                        <Link to="#">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold">
                                    Titulo
                                </h4>
                                <p className="text-main">Nueva</p>
                            </div>
                            <p>Mensaje de la notificacion.</p>
                        </Link>
                    </li>
                    <li className="my-4 border-b">
                        <Link to="#">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold">
                                    Titulo
                                </h4>
                                <p className="text-main">Nueva</p>
                            </div>
                            <p>Mensaje de la notificacion.</p>
                        </Link>
                    </li>
                    <li className="my-4 border-b">
                        <Link to="#">
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold">
                                    Titulo
                                </h4>
                                <p className="text-main">Nueva</p>
                            </div>
                            <p>Mensaje de la notificacion.</p>
                        </Link>
                    </li>

                    <li className="text-center">
                        <button className="bg-main rounded-3xl text-white px-4 py-2">
                            Cargar mas
                        </button>
                    </li>
                </ul>
            }
        </div>
    )
}

export default NotificationComponent;