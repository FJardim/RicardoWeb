import BannerChef from "../componentes/BannerChef";
import CardRecipes from "../componentes/CardRecipes";
import banner from "../assets/banner.jpg";
import Tacos from "../assets/Tacos.jpg";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import SelectOrder from "../componentes/SelectOrder";
import ButtomButton from "../componentes/ButtomButton";

const RecipesChef = () => {
  return (
    <div className="min-w-0">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mr-10 mb-20 mt-20 ml-20">
            {[...Array(12).keys()].map((numero, i) => {
              return (
                <CardRecipes
                  texto="Tacos al Pastor"
                  parrafo="Ricardo App Team"
                  title="Dinner"
                  foto={Tacos}
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
export default RecipesChef;
