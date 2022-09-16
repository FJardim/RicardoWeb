import imgUrl from "../helpers/imgUrl";

const OrderItemRow = ({ item }) => {
    return (
        <tr className="border-b">
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
}

export default OrderItemRow;