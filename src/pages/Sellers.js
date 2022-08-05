import React, { useEffect, useState } from "react";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.jpg";
import CardChef from "../componentes/CardChef";
import ButtomButton from "../componentes/ButtomButton";
import MenuLeft from "../componentes/MenuLeft";
import { Link, useSearchParams } from "react-router-dom";
import ButtonOverview from "../componentes/ButtonOverview";
import ModalFiltre from "../componentes/ModalFiltre";
import useSellers from "../hooks/useSellers";
import SystemInfo from "../util/SystemInfo";
import imgUrl from "../helpers/imgUrl";
import Pagination from "../componentes/Pagination";

const Sellers = () => {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const [searchParams] = useSearchParams();

  const [sellersFilters, setSellersFilters] = useState({
    page: 1,
    perPage: 10,
    name: '',
    categoryIds: [],
    mealPeriodsIds: [],
    rating: ''
  });

  const [{ sellers, total, size, numberOfPages, error, loading }, getSellers] = useSellers({ params: { ...sellersFilters } });

  useEffect(() => {
    const categoryId = searchParams?.get('categoryId');

    const name = searchParams?.get('name');

    if (categoryId) {
      setSellersFilters((oldFilters) => {
        return {
          ...oldFilters,
          categoryIds: [categoryId],
          page: 1
        }
      });
    }

    if (name) {
      setSellersFilters((oldFilters) => {
        return {
          ...oldFilters,
          name: name,
          page: 1
        }
      });
    }

  }, [searchParams]);

  const handleCategory = (category) => {
    setSellersFilters((oldSellersFilters) => {
      return {
        ...oldSellersFilters,
        page: 1,
        categoryIds: [category?.id]
      }
    });
  }

  return (
    <div className="">
      <BannerPage image={img1} title="Sellers" />
      <div className="container md:p-8">
      </div>
      <div className="p-6">
        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft filters={sellersFilters} onClickCategory={handleCategory} />

          <div className="mt-10 md:mt-0 md:col-span-3">
            {
              sellersFilters?.name &&
              <div className="text-center text-4xl mb-16">
                Results for "{sellersFilters?.name}..."
              </div>
            }
            {
              loading &&
              <h1 className="text-4xl text-center">
                Cargando...
              </h1>
            }
            {
              sellers?.length === 0 && !loading ?
                <h1 className="text-4xl text-center text-red-500">
                  No results found.
                </h1>
                :
                null
            }

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {sellers?.map((seller, i) => {
                return (
                  <Link to={`/sellers/${seller.slug}/recipes`} key={i}>
                    <CardChef foto={`${SystemInfo?.api}${seller?.banner}`}
                      name={seller?.name}
                      logo={imgUrl(seller?.logo)}
                      description={seller?.occupations?.map(occupation => occupation?.name)?.join(', ')}
                      recipes={seller?.recipesCount}
                      plans={seller?.plansCount}
                      pack={seller?.combosCount}
                    />
                  </Link>
                );
              })}
            </div>
            <br />
            <div className="flex justify-center">
              <Pagination
                pages={numberOfPages}
                onChange={(page) => setSellersFilters((oldFilters) => { return { ...oldFilters, page: page } })}
                activePage={sellersFilters?.page}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalFiltre show={showModalMenu} onClose={() => setShowModalMenu(false)} />
    </div>
  );
};

export default Sellers;
