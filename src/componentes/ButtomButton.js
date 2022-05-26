import ScrollNavigation from "../componentes/ScrollNavigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const ButtomButton = () => {
    return (

        <div className="flex overflow-auto justify-center space-x-2 mb-6">
            <ScrollNavigation
                title={<MdKeyboardArrowLeft className="text-2xl" />}
            />
            <ScrollNavigation title="1" />
            <ScrollNavigation title="2" />
            <ScrollNavigation title="3" />
            <ScrollNavigation title="4" />
            <ScrollNavigation title="5" />
            <ScrollNavigation title="6" />
            <ScrollNavigation
                title={<MdKeyboardArrowRight className="text-2xl" />}
            />
        </div>
    );
}

export default ButtomButton;