import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import { IoImageOutline, IoAttachOutline, IoSendSharp } from "react-icons/io5";
import clsx from "clsx";
import { useAuth } from "../contexts/AuthContext";
import DateFormatter from "../componentes/DateFormatter";


const ChatsDetails = () => {

    const { id } = useParams();

    const { user } = useAuth();

    const [message, setMessage] = useState('');

    const [currentMessages, setCurrentMessages] = useState([]);

    const [{ data: newMessage, loading: newMessageLoading }, sendMessage] = useAxios({ url: `/chats/${id}/messages`, method: 'POST' }, { manual: true, useCache: false });

    const [{ data, loading, error }, getChat] = useAxios({ url: `/chats/${id}` }, { useCache: false });

    useEffect(() => {
        if (newMessage) {
            setCurrentMessages((oldMessages) => {
                return [newMessage, ...oldMessages]
            });
            setMessage('');
        }
    }, [newMessage])

    useEffect(() => {
        console.log(currentMessages);
    }, [currentMessages])

    useEffect(() => {
        if (data) {
            console.log(data);
            setCurrentMessages((oldMessages) => {
                return [...oldMessages, ...data?.messages]
            });
        }
    }, [data])

    const handleSubmit = (e) => {
        e?.preventDefault?.();
        if (newMessageLoading || !message) {
            return;
        }

        sendMessage({
            data: {
                content: message
            }
        });
    }

    return (
        <div className="container p-4 h-full w-full mb-20">
            <div className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-4">
                    <img className="h-20 w-20 rounded-full" src={imgUrl(data?.seller?.logo)} alt="" />
                    <p>
                        {data?.seller?.name}
                    </p>
                </div>
                <Link className="bg-main px-4 py-2 rounded-full text-white hover:shadow-xl" to={'/chats'}>
                    Back
                </Link>
            </div>
            <div className="px-8" style={{ height: '65vh', overflowY: 'auto', flexDirection: 'column-reverse', display: 'flex', width: '100%' }}>
                {
                    currentMessages?.map?.((message, i) => {
                        return (
                            <div key={i} className={clsx(["flex my-2 w-2/3"], {
                                "justify-end": user?.id === message?.userId
                            })}>
                                <div className={clsx(["shadow py-2 px-8 rounded-full"], {
                                    "bg-white": user?.id !== message?.userId,
                                    "bg-main text-white text-right": user?.id == message?.userId
                                })}>
                                    <b>{message?.content}</b>
                                    <p>
                                        <small><DateFormatter value={message?.createdAt} dateFormat={'dd-MM-yyyy hh:mm:ss'} /></small>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <form onSubmit={handleSubmit} className="flex items-center space-x-4 py-8">
                <input type="text"
                    placeholder="Write your message..."
                    className="focus:border-none focus:ring-none focus:ring-gray-200 w-full h-16"
                    value={message}
                    onChange={(e) => setMessage(e?.target?.value)}
                    autoFocus
                    style={{
                        border: 'none',
                        borderBottom: '1px solid #d1d1d1',
                        background: 'transparent'
                    }}
                />
                <div className="w-4/12 md:w-2/12 flex justify-around">
                    <button type="button" style={{ backgroundColor: '#f59e0b' }} className="text-white px-6 py-4 rounded-full">
                        <IoAttachOutline />
                    </button>
                    <button disabled={newMessageLoading} className="bg-main text-white px-6 py-4 rounded-full">
                        {
                            newMessageLoading ?
                                'sending...'
                                :
                                <IoSendSharp />
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChatsDetails;