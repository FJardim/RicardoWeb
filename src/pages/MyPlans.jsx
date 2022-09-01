import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import usePlans from "../hooks/usePlans";

const MyPlans = () => {

    const { user } = useAuth();

    const [plansFilters, setPLansFilters] = useState({
        page: 1
    });

    const [{ plans, total, numberOfPages, size, error, loading }, getPlans] = usePlans({ params: { ...plansFilters, clientId: user?.id } });

    return (
        <div className="container p-4 md:p-20 w-full mb-20">
            <h1>
                My plans
            </h1>
            <div className="text-right mb-8">
                <Link to="/my-plans/create" className="px-8 py-2 rounded text-white bg-main">
                    Create Plan
                </Link>
            </div>
            <table className="w-full bg-white rounded shadow">
                <thead>
                    <tr>
                        <th></th>
                        <th>id</th>
                        <th>name</th>
                        <th>Categories</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>
                            1
                        </td>
                        <td>
                            el plan
                        </td>
                        <td>
                            vegetarianso
                        </td>
                        <td>
                            Edit
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyPlans;