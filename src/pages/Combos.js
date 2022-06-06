import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.jpg";
import Collage from "../assets/ImgCombos.jpeg";
import { Link } from "react-router-dom";
import ButtomButton from "../componentes/ButtomButton";
import MenuLeft from "../componentes/MenuLeft";

const Combos = () => {
  return (
    <div className="">
      <BannerPage image={img1} title="Combos" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft />
          <div className="mt-10 md:mt-0 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {[...Array(12).keys()].map((numero, i) => {
                return (
                  <Link to="/combos/:slug"><CardRecipes
                    texto="Combos Pierde Peso"
                    parrafo="Anya Taylor"
                    title=""
                    foto={Collage}
                    hideButtons
                    hideCart
                  />
                  </Link>
                );
              })}
            </div>
            <br />
            <ButtomButton />
          </div>
        </div>
      </div>
    </div >
  );
};
export default Combos;
