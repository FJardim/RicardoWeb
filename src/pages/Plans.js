import React, { useEffect, useState } from "react";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.jpg";
import { Link, useSearchParams } from "react-router-dom";
import MenuLeft from "../componentes/MenuLeft";
import usePlans from "../hooks/usePlans";
import SystemInfo from "../util/SystemInfo";
import Pagination from "../componentes/Pagination";
import WeightPlan from "../componentes/WeightPlan";
import ButtonOverview from "../componentes/ButtonOverview";
import ModalFiltre from "../componentes/ModalFiltre";
import { useAuth } from "../contexts/AuthContext";

const Plans = () => {

  const { user } = useAuth();

  const [showModalMenu, setShowModalMenu] = useState(false);

  const [searchParams] = useSearchParams();

  const [plansFilters, setPlansFilters] = useState({
    page: 1,
    perPage: 9,
    name: '',
    categoryIds: [],
    hideFavoritedForClientId: user?.id,
  });

  const [{ plans, numberOfPages, loading }, getPlans] = usePlans({ params: { ...plansFilters }, options: { useCache: false } });

  useEffect(() => {
    const categoryId = searchParams?.get('categoryId');

    const name = searchParams?.get('name');

    if (categoryId) {
      setPlansFilters((oldFilters) => {
        return {
          ...oldFilters,
          categoryIds: [categoryId],
          page: 1
        }
      });
    }

    if (name) {
      setPlansFilters((oldFilters) => {
        return {
          ...oldFilters,
          name: name,
          page: 1
        }
      });
    }

  }, [searchParams]);

  const handleCategory = (category) => {
    setPlansFilters((oldPlansFilters) => {
      return {
        ...oldPlansFilters,
        page: 1,
        categoryIds: [category?.id]
      }
    });
  }

  return (
    <div className="">
      <BannerPage image={img1} title="Plans" />
      <div className="container md:p-8">
      </div>
      <div className="p-6">

        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />

        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft filters={plansFilters} onClickCategory={handleCategory} />

          <div className="mt-10 md:mt-0 md:col-span-3">
            {
              plansFilters?.name &&
              <div className="text-center text-4xl mb-16">
                Results for "{plansFilters?.name}..."
              </div>
            }
            {
              loading &&
              <h1 className="text-4xl text-center">
                loading...
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 lg:grid-cols-3 md:mr-5">
              {plans.map((plan, i) => {
                return (
                  <Link
                    key={i}
                    to={`/plan/${plan?.slug}`}>
                    <WeightPlan
                      price={`${plan?.price}$`}
                      hideCart
                      logo={`${SystemInfo?.api}${plan?.seller?.logo}`}
                      img={`${SystemInfo?.api}${plan?.images?.[0]?.path}`}
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
              pages={numberOfPages}
              onChange={(page) => setPlansFilters((oldFilters) => { return { ...oldFilters, page: page } })}
              activePage={plansFilters?.page}
            />
          </div>
        </div>
      </div>
      <ModalFiltre show={showModalMenu} onClose={() => setShowModalMenu(false)} />
    </div >
  );
};

export default Plans;
