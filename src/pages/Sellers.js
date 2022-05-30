import React from "react";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.png";
import CardChef from "../componentes/CardChef";
import banner from "../assets/banner.jpg";
import ButtomButton from "../componentes/ButtomButton";
import MenuLeft from "../componentes/MenuLeft";
// import ButtonSupr from "../componentes/ButtonSupr";

const Sellers = () => {
  return (
    <div className="">
      <BannerPage image={img1} title="Sellers" />
      <div className="container p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2">
          <MenuLeft />
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 ml-10 mr-10 mb-20 mt-20 mb:ml-20">
              {[...Array(9).keys()].map((numero, i) => {
                return <CardChef foto={banner}
                  name="Anya Taylor"
                  description="Chef, Nutrition, Specialist"
                  recipes=" Recipes:50"
                  plans="Plans:50"
                  pack="Pack:10"
                />;
              })}
            </div>
            <ButtomButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
