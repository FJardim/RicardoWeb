import BannerChef from "../componentes/BannerChef";
import CardRecipes from "../componentes/CardRecipes";
import banner from "../assets/banner.jpg";
import collage from "../assets/collage.jpg";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import SelectOrder from "../componentes/SelectOrder";
import ButtomButton from "../componentes/ButtomButton";

const CombosChef = () => {
  return (
    <div className="md:min-w-0">
      <BannerChef image={banner} title="New Recipes" />
      <div className="px-16 py-10">
        <div className=" flex justify-center">
          <ButtonItems defaultCategory="combos" />
        </div>
        <div className="md:flex md:justify-end m-2 ">
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
          <div className="grid md:grid-cols-3 md:gap-4 md:mb-20 md:ml-20 md:mt-2">
            {[...Array(9).keys()].map((numero, i) => {
              return (
                <CardRecipes
                  texto="Tacos al Pastor"
                  parrafo="Ricardo App Team"
                  title="Dinner"
                  foto={collage}
                  hideButtons
                  hideClock
                />
              );
            })}
          </div>
          <div className="flex justify-center space-x-2 mb-6">
            <ButtomButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CombosChef;
