import React from "react";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.png";
import CardGym from "../componentes/CardGym";
import girltraining from "../assets/girltraining.jpg";
import { Link } from "react-router-dom";
import ButtomButton from "../componentes/ButtomButton";
import ButtonSupr from "../componentes/ButtonSupr";
import MenuLeft from "../componentes/MenuLeft";

const Sellers = () => {
  return (
    <div className="">
      <BannerPage image={img1} title="Plans" />
      <div className="container p-8">
        <ButtonSupr />
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2">
          <MenuLeft />
          <div className="md:col-span-3 bg-white ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-10 mr-10 mb-20">
              {[...Array(9).keys()].map((numero, i) => {
                return (
                  <Link to="/plan/:slug"><CardGym
                    foto={girltraining}
                    name="Weight Loss Plan"
                    description="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds"
                  /></Link>
                );
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
