import React, { useState } from "react";
import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";
import MenuLeft from "../componentes/MenuLeft";
import ButtonOverview from "../componentes/ButtonOverview";
import ModalFiltre from "../componentes/ModalFiltre";
import SystemInfo from "../util/SystemInfo";
import useCombos from "../hooks/useCombos";
import Pagination from "../componentes/Pagination";

const Combos = () => {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [combosFilters, setCombosFilters] = useState({
    page: 1,
    perPage: 12
  });
  const [{ combos, total, numberOfPages, size, error, loading }, getCombos] = useCombos({ axiosConfig: { params: { ...combosFilters } } });

  return (
    <div className="">
      <BannerPage image={img1} title="Combos" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft />
          <div className="mt-10 md:mt-0 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {
                combos?.map((combo, i) => {
                  return (
                    <Link to="/combos/:slug">
                      <CardRecipes
                        key={combo.id}
                        texto={combo.name}
                        price={`${combo?.price}`}
                        bolsaIng={"2"}
                        cestaIng={"2"}
                        timePre={"2"}
                        nameSellers={"hola"}
                        title={combo.name}
                        foto={`${SystemInfo?.api}${combo?.images?.[0]?.path}`}
                        hideCart
                        hideClock
                      // hideBag
                      //hideButtons
                      />
                    </Link>
                  );
                })}
            </div>
            <br />
            <Pagination
              pages={numberOfPages}
              onChange={(page) => setCombosFilters((oldFilters) => { return { ...oldFilters, page: page } })}
              activePage={combosFilters?.page}
            />
          </div>
        </div>
      </div>
      <ModalFiltre show={showModalMenu} onClose={() => setShowModalMenu(false)} />
    </div >
  );
};
export default Combos;
