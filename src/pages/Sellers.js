import React, { useState } from "react";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.jpg";
import CardChef from "../componentes/CardChef";
import banner from "../assets/banner.jpg";
import ButtomButton from "../componentes/ButtomButton";
import MenuLeft from "../componentes/MenuLeft";
import { Link } from "react-router-dom";
import ButtonOverview from "../componentes/ButtonOverview";
import ModalFiltre from "../componentes/ModalFiltre";
import useSellers from "../hooks/useSellers";
import SystemInfo from "../util/SystemInfo";
// import ButtonSupr from "../componentes/ButtonSupr";

const Sellers = () => {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const [{ sellers, loading }, getSellers] = useSellers();

  return (
    <div className="">
      <BannerPage image={img1} title="Sellers" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft />
          <div className="mt-10 md:mt-0 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {sellers?.map((seller, i) => {
                return (
                  <Link to="/blogchef" key={i}>
                    <CardChef foto={`${SystemInfo?.api}${seller?.banner}`}
                      name={seller?.name}
                      description={seller?.occupations?.map(occupation => occupation?.name)?.join(', ')}
                      recipes={seller?.recipesCount}
                      plans={seller?.plansCount}
                      pack={seller?.combosCount}
                    />
                  </Link>
                );
              })}
            </div>
            <ButtomButton />
          </div>
        </div>
      </div>
      <ModalFiltre show={showModalMenu} onClose={() => setShowModalMenu(false)} />
    </div>
  );
};

export default Sellers;
