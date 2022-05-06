import BannerChef from "../componentes/BannerChef";
import CardRecipes from "../componentes/CardRecipes";
import banner from "../assets/banner.jpg";
import collage from "../assets/collage.jpg";
import ScrollNavigation from "../componentes/ScrollNavigation";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import SelectOrder from "../componentes/SelectOrder";

const CombosChef = () => {
  return (
    <div className="bg-slate-100 min-w-0">
      <BannerChef image={banner} title="New Recipes" />
      <div className="px-16 py-16">
        <div className=" flex justify-center">
          <ButtonItems />
        </div>
        <div className=" flex justify-end">
          <SelectOrder />
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[300px] shrink-0 p-3 bg-white mb-20 ml-8 rounded-lg">
          <div className="ml-6 mt-6">
            <InformationChef />
            <CertificationChef />
            <DescriptionChef />
            <Post />
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-20 ml-20 md:gap-10 mr-10 mb-20">
            {[...Array(9).keys()].map((numero, i) => {
              return (
                <CardRecipes
                  texto="Tacos al Pastor"
                  parrafo="Ricardo App Team"
                  title="Dinner"
                  foto={collage}
                />
              );
            })}
          </div>
          <div className="flex justify-center space-x-2 mb-6">
            <ScrollNavigation title="<" />
            <ScrollNavigation title="1" />
            <ScrollNavigation title="2" />
            <ScrollNavigation title="3" />
            <ScrollNavigation title="4" />
            <ScrollNavigation title="5" />
            <ScrollNavigation title="6" />
            <ScrollNavigation title=">" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CombosChef;
