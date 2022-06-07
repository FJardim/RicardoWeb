import React, { useEffect, useState } from "react";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.jpg";
import CardGym from "../componentes/CardGym";
import { Link } from "react-router-dom";
// import ButtonSupr from "../componentes/ButtonSupr";
import MenuLeft from "../componentes/MenuLeft";
import usePlans from "../hooks/usePlans";
import SystemInfo from "../util/SystemInfo";
import Pagination from "../componentes/Pagination";
import WeightPlan from "../componentes/WeightPlan";

const Sellers = () => {

  const [plansFilters, setPlansFilters] = useState({
    page: 1,
    perPage: 9,
  });

  const [{ plans, numberOfPages, loading }, getPlans] = usePlans({ axiosConfig: { params: { ...plansFilters } } });

  return (
    <div className="">
      <BannerPage image={img1} title="Plans" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft />
          <div className="mt-10 md:mt-0 md:col-span-3">
            {
              loading &&
              <h1 className="text-4xl text-center">
                Cargando...
              </h1>
            }
            {
              plans?.length === 0 && !loading ?
                <h1 className="text-4xl text-center text-red-500">
                  No results found.
                </h1>
                :
                null
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {plans.map((plan, i) => {
                return (
                  <Link
                    key={i}
                    to={`/plan/${plan?.slug}`}>
                    <WeightPlan
                      logo={`${SystemInfo?.api}${plan?.seller?.logo}`}
                      img={`${SystemInfo?.api}${plan?.planImages?.[0]?.path}`}
                      title={plan?.name}
                      text={plan?.description}
                    />
                  </Link>
                );
              })}
            </div>
            <br />
            <br />
            <Pagination
              pages={10}
              onChange={(page) => setPlansFilters((oldFilters) => { return { ...oldFilters, page: page } })}
              activePage={plansFilters?.page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
