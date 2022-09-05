import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import usePlans from "../hooks/usePlans";
import { IoCreate, IoTrashBinSharp } from "react-icons/io5";
import Pagination from "../componentes/Pagination";
import useAxios from "../hooks/useAxios";
import Modal from "../componentes/Modal/Modal";

const MyPlans = () => {

    const { user } = useAuth();

    const [planIdToDelete, setPlanIdToDelete] = useState(null);

    const [plansFilters, setPlansFilters] = useState({
        page: 1,
        clientId: user?.id
    });

    const [{ plans, total, numberOfPages, size, error, loading: plansLoading }, getPlans] = usePlans({ params: { ...plansFilters, clientId: user?.id } });

    const [{ loading: deletePlanLoading }, deletePlan] = useAxios({ method: 'DELETE' }, { manual: true, useCache: false });

    const handleDelete = () => {
        deletePlan({ url: `plans/${planIdToDelete}` }).then(() => {
            getPlans({
                params: {
                    ...plansFilters
                }
            });
            setPlanIdToDelete(null);
        })
    }

    return (
        <div className="container p-4 md:p-20 w-full mb-20">
            <p className="text-4xl font-bold text-black mb-8">My Plans</p>
            <div className="text-right mb-8">
                <Link to="/my-plans/create" className="px-8 py-2 rounded text-white bg-main">
                    Create Plan
                </Link>
            </div>
            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr>
                        <th className="py-4">id</th>
                        <th className="py-4">name</th>
                        <th className="py-4">Categories</th>
                        <th className="py-4">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        plansLoading ?
                            <tr>
                                <td colSpan={4} className="text-center py-8">
                                    Loading...
                                </td>
                            </tr>
                            :
                            plans?.map((plan, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="py-8">
                                            {plan?.id}
                                        </td>
                                        <td className="py-8">
                                            {plan?.name}
                                        </td>
                                        <td className="py-8">
                                            {plan?.categories?.map(category => category?.name).join(', ')}
                                        </td>
                                        <td className="py-8 flex items-center justify-center space-x-4">
                                            <Link to={`/my-plans/${plan?.id}`} title="Edit">
                                                <IoCreate className="text-4xl text-main" />
                                            </Link>
                                            <button onClick={() => setPlanIdToDelete(plan?.id)} type="button" title="Delete">
                                                <IoTrashBinSharp className="text-4xl text-red-500" />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
            <br />
            <br />
            <div className="flex w-full justify-center">
                <Pagination
                    pages={numberOfPages}
                    onChange={(page) => setPlansFilters((oldFilters) => { return { ...oldFilters, page: page } })}
                    activePage={plansFilters?.page}
                />
            </div>
            <Modal onClose={() => setPlanIdToDelete(null)} show={planIdToDelete}>
                <h1 className="text-center text-2xl">
                    are you sure?
                </h1>
                <div className="mt-8 text-center space-x-4">
                    <button onClick={(e) => setPlanIdToDelete(null)} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                        Cancel
                    </button>
                    <button onClick={handleDelete} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                        {
                            deletePlanLoading ?
                                'Loading'
                                :
                                'Confirm'
                        }
                    </button>
                </div>
            </Modal>
        </div >
    )
}

export default MyPlans;