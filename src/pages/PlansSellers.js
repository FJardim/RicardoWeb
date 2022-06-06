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
            <div className="px-16 py-10">
                <div className="flex justify-center">
                    <ButtonItems defaultCategory="plans" />
                </div>
                <div className="md:flex md:justify-end m-2 ml-2">
                    <SelectOrder />
                </div>
            </div>

            <div className="md:flex p-4 flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[300px] md:shrink-0 bg-white mb-10 md:mb-20 md:ml-8 rounded-lg">
                    <div className="p-4">
                        <InformationChef />
                        <CertificationChef />
                        <DescriptionChef />
                        <Post />
                    </div>
                </div>
                <div className="md:w-full">
                    <div className="md:grid md:grid-cols-3 md:ml-14 md:mr-4 md:mb-10">
                        {[...Array(12).keys()].map((numero, i) => {
                            return (
                                <WeightPlan
                                    title="Weight loss plan"
                                    logo={LogoPlan}
                                    text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds"
                                    img={whPlan}
                                    hideButtons
                                />
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