import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";

const OrdersDetails = () => {

    const { user } = useAuth()

    const { id } = useParams()

    const [{ data, loading, error }, getOrder] = useAxios({ url: `/orders/${id}` }, { useCache: false });

    const [currentOrder, setCurrentOrder] = useState(null);

    useEffect(() => {
        if (data) {
            setCurrentOrder(data);
        }
    }, [data])

    return (
        <div className="container p-4 md:p-20 h-full w-full mb-20">
            <p className="text-4xl font-bold text-black ">Orders Details</p>
            <br />
            <p>
                Hi, <b>{user?.name}</b>. Your order has been <b className="capitalize" style={{ color: currentOrder?.orderStatus?.color }}>{currentOrder?.orderStatus?.name}</b>.
            </p>
            <br />
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block w-full">
                        <div>
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Order Date</b>
                                            </h1>
                                            {currentOrder?.createdAt && format(new Date(currentOrder?.createdAt), 'dd-MM-yyyy')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Order Number</b>
                                            </h1>
                                            {currentOrder?.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Payment Method</b>
                                            </h1>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Order Seller</b>
                                            </h1>
                                            <Link className="font-bold text-main hover:text-gray-400" to={`/sellers/${currentOrder?.seller?.slug}/recipes`}>
                                                {currentOrder?.seller?.name}
                                            </Link>
                                        </td>
                                    </tr>
                                    {
                                        currentOrder?.orderItems?.map((item, i) => {
                                            return (
                                                <tr className="border-b" key={i}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <img src={imgUrl(item?.image)} style={{ width: 60, height: 60 }} className="rounded-xl" />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        <h1>
                                                            <b>
                                                                <span className="capitalize">
                                                                    {item?.type}
                                                                </span>:
                                                                {` ${item?.name}`}
                                                            </b>
                                                        </h1>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        Qty {item?.quantity}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                                        {item?.total ? `$${item?.total}` : 'Free'}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Subtotal</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.total ? `$${currentOrder?.total}` : 'Free'}
                                            </h1>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Taxes</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.taxes ? `$${currentOrder?.taxes}` : '$0'}
                                            </h1>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Discount</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.discount ? `$${currentOrder?.discount}` : '$0'}
                                            </h1>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td colSpan={2} className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Total</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-6 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.total ? `$${currentOrder?.total}` : '$0'}
                                            </h1>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersDetails;