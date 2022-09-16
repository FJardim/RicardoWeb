import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderItemRow from "../componentes/OrderItemRow";
import { useAuth } from "../contexts/AuthContext";
import { useFeedBack } from "../contexts/FeedBackContext";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import usePaymentMethods from "../hooks/usePaymentMethods";

const OrdersDetails = () => {

    const { user } = useAuth()

    const { id } = useParams()

    const { setLoading } = useFeedBack();

    const [currentOrder, setCurrentOrder] = useState(null);

    const [{ data, loading, error }, getOrder] = useAxios({ url: `/orders/${id}` }, { useCache: false });

    const [{ paymentMethods, total, numberOfPages, size, loading: loadingPayments }, getPaymentMethods] = usePaymentMethods();

    const [{ data: payData, loading: payLoading }, payOrder] = useAxios({ method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        setLoading({
            show: payLoading,
            message: 'Loading...'
        })
    }, [payLoading])

    useEffect(() => {
        if (data) {
            setCurrentOrder(data);
        }
    }, [data])


    const handlePay = (paymentMethod) => {
        payOrder({ url: `/orders/${currentOrder?.id}/pay` });
    }

    return (
        <div className="container p-4 md:p-20 h-full w-full mb-20">
            <div className="flex items-center justify-between w-full">
                <div className="w-8/12">
                    <p className="text-4xl font-bold text-black ">Orders Details</p>
                    <br />
                    <p>
                        Hi, <b>{user?.name}</b>. Your order has been <b className="capitalize" style={{ color: currentOrder?.orderStatus?.color }}>{currentOrder?.orderStatus?.name}</b>.
                    </p>
                </div>
                <div className="w-4/12">
                    {
                        currentOrder?.orderStatus?.code === 'ors-001' &&
                        <div>
                            <h1 className="text-xl text-gray-500 mb-4">
                                Pay with:
                            </h1>
                            <div className="flex items-center flex-wrap space-x-4 justify-center">
                                {
                                    paymentMethods?.map((payment, i) => {
                                        return (
                                            <button key={i} className="w-1/4 py-2 rounded-xl text-center text-white capitalize" onClick={() => handlePay(payment?.code)}>
                                                <img src={imgUrl(payment?.image)} alt="" style={{ maxWidth: '100%' }} />
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
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
                                            {
                                                currentOrder?.payment?.paymentMethod?.name || '--'
                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Order Seller</b>
                                            </h1>
                                            <Link className="font-bold text-main hover:text-gray-400" to={`/ sellers / ${currentOrder?.seller?.slug} / recipes`}>
                                                {currentOrder?.seller?.name}
                                            </Link>
                                        </td>
                                    </tr>
                                    {
                                        currentOrder?.orderItems?.map((item, i) => {
                                            return (
                                                <OrderItemRow item={item} key={i} />
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