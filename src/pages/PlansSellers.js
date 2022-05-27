import BannerChef from "../componentes/BannerChef";
import ButtonItems from "../componentes/ButtonItems";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import InformationChef from "../componentes/InformationChef";
import Post from "../componentes/Post";
import SelectOrder from "../componentes/SelectOrder";
import WeightPlan from "../componentes/WeightPlan";
import LogoPlan from "../assets/Premium-icon.svg";
import whPlan from "../assets/girltraining.jpg"
import banner from "../assets/banner.jpg";
import ButtomButton from "../componentes/ButtomButton";

const PlansSellers = () => {
    return (
        <div className="md:min-w-0">
            <BannerChef image={banner} title="New Recipes" />
            <div className="px-16 py-16">
                <div className="flex justify-center">
                    <ButtonItems />
                </div>
                <div className="md:flex justify-end">
                    <SelectOrder />
                </div>
            </div>

            <div className="md:flex flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[300px] shrink-0 p-3 bg-white mb-20 ml-8 rounded-lg">
                    <div className="ml-6 mt-6">
                        <InformationChef />
                        <CertificationChef />
                        <DescriptionChef />
                        <Post />
                    </div>
                </div>
                <div className="md:w-full">
                    <div className="md:grid grid-cols-1 md:grid-cols-3 mt-20 ml-20 mr-10 mb-20 ">
                        {[...Array(12).keys()].map((numero, i) => {
                            return (
                                <WeightPlan
                                    title="Weight loss plan"
                                    logo={LogoPlan}
                                    text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds"
                                    img={whPlan}
                                    hideButtons />
                            );
                        })}

                    </div>
                    <ButtomButton />
                </div>

            </div>
        </div>
    );
};

export default PlansSellers;