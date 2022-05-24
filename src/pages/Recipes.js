import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.png";
import Tacos from "../assets/protein.jpg";
import { Link } from "react-router-dom";
import ButtomButton from "../componentes/ButtomButton";
import ButtonSupr from "../componentes/ButtonSupr";
import MenuLeft from "../componentes/MenuLeft";

const Recipes = () => {
  return (
    <div className="">
      <BannerPage image={img1} title="New Recipes" />
      <div className="container p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2">
          <MenuLeft />
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-10 mr-10 mb-20">
              {[...Array(12).keys()].map((numero, i) => {
                return (
                  <Link to="/recipes/:slug"><CardRecipes
                    texto="Tacos al Pastor"
                    parrafo="Ricardo App Team"
                    title="Dinner"
                    foto={Tacos}
                    hideCart
                  /></Link>
                );
              })}
            </div>
            <ButtomButton />
          </div>
        </div>
      </div>
    </div >
  );
};
export default Recipes;
