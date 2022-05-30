import BannerChef from "../componentes/BannerChef";
import banner from "../assets/banner.jpg";
import ScrollNavigation from "../componentes/ScrollNavigation";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import DescriptionPost from "../componentes/DescriptionPost";
import ButtomButton from "../componentes/ButtomButton";

const BlogChef = () => {
  return (
    <div className="bg-slate-100 min-w-0">
      <BannerChef image={banner} title="New Recipes" />
      <div className="px-16 py-16">
        <div className=" flex justify-center">
          <ButtonItems />
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[300px] md:shrink-0 p-3 bg-white mb-20 md:ml-8 rounded-lg">
          <div className="ml-6 mt-6">
            <InformationChef />
            <CertificationChef />
            <DescriptionChef />
            <Post />
          </div>
        </div>
        <div className="w-full">
          <div className="space-y-6 md:mt-6 md:ml-20 md:mr-20">
            <h1 className="text-5xl font-semibold">Blog</h1>
            <div className="bg-white rounded-xl p-5">
            <DescriptionPost title="5 Formas de Picar Cebolla" />
            <DescriptionPost title="Tips para Mejorar tus Jugos" />
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-10 mb-10">
           <ButtomButton/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogChef;
