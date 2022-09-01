import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import useCategories from "../hooks/useCategories";

const StepThree = () => {
    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    return (
        <div>
            <div className="text-right space-x-4">
                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Back
                </button>
                <button onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepThree;