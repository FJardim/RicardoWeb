import React, { useEffect, useState } from "react";
import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.jpg";
import { Link, useSearchParams } from "react-router-dom";
import MenuLeft from "../componentes/MenuLeft";
import ButtonOverview from "../componentes/ButtonOverview";
import ModalFiltre from "../componentes/ModalFiltre";
import SystemInfo from "../util/SystemInfo";
import useCombos from "../hooks/useCombos";
import Pagination from "../componentes/Pagination";
import imgUrl from "../helpers/imgUrl";

const Combos = () => {
  const [showModalMenu, setShowModalMenu] = useState(false);

  const [searchParams] = useSearchParams();

  const [combosFilters, setCombosFilters] = useState({
    page: 1,
    perPage: 12,
    name: '',
    categoryIds: []
  });

  const [{ combos, total, numberOfPages, size, error, loading }, getCombos] = useCombos({ params: { ...combosFilters }, options: { useCache: false } });

  useEffect(() => {
    const categoryId = searchParams?.get('categoryId');

    const name = searchParams?.get('name');

    if (categoryId) {
      setCombosFilters((oldFilters) => {
        return {
          ...oldFilters,
          categoryIds: [categoryId],
          page: 1
        }
      });
    }

    if (name) {
      setCombosFilters((oldFilters) => {
        return {
          ...oldFilters,
          name: name,
          page: 1
        }
      });
    }

  }, [searchParams]);

  const handleCategory = (category) => {
    setCombosFilters((oldCombosFilters) => {
      return {
        ...oldCombosFilters,
        page: 1,
        categoryIds: [category?.id]
      }
    });
  }

  return (
    <div className="">
      <BannerPage image={img1} title="Combos" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft filters={combosFilters} onClickCategory={handleCategory} />
          <div className="mt-10 md:mt-0 md:col-span-3">
            {
              combosFilters?.name &&
              <div className="text-center text-4xl mb-16">
                Results for "{combosFilters?.name}..."
              </div>
            }
            {
              loading &&
              <h1 className="text-4xl text-center">
                loading...
              </h1>
            }
            {
              combos?.length === 0 && !loading ?
                <h1 className="text-4xl text-center text-red-500">
                  No results found.
                </h1>
                :
                null
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {
                combos?.map((combo, i) => {
                  return (
                    <Link to={`/combos/${combo.slug}`} key={combos.id}>
                      <CardRecipes
                        key={combo.id}
                        texto={combo.name}
                        price={combo.price}
                        numberOfIngredients={combo.numberOfIngredients}
                        numberOfItems={combo.numberOfItems}
                        sellerName={combo.seller.name}
                        sellerLogo={imgUrl(combo.seller.logo)}
                        foto={`${SystemInfo?.api}${combo?.images?.[0]?.path}`}
                        title={combo.name}
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
