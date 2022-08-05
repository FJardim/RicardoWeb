import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.jpg";
import { Link, useSearchParams } from "react-router-dom";
import MenuLeft from "../componentes/MenuLeft";
import useRecipes from "../hooks/useRecipes";
import { useEffect, useState } from "react";
import Pagination from "../componentes/Pagination";
import ButtonOverview from "../componentes/ButtonOverview";
import ModalFiltre from "../componentes/ModalFiltre";
import imgUrl from "../helpers/imgUrl";


const Recipes = () => {

  const [showModalMenu, setShowModalMenu] = useState(false);

  const [recipesFilters, setRecipesFilters] = useState({
    page: 1,
    perPage: 12,
    name: '',
    categoryIds: []
  });



  const [{ recipes, numberOfPages, loading }] = useRecipes({ params: { ...recipesFilters }, options: { useCache: false } });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryId = searchParams?.get('categoryId');

    const name = searchParams?.get('name');

    if (categoryId) {
      setRecipesFilters((oldFilters) => {
        return {
          ...oldFilters,
          categoryIds: [categoryId],
          page: 1
        }
      });
    }

    if (name) {
      setRecipesFilters((oldFilters) => {
        return {
          ...oldFilters,
          name: name,
          page: 1
        }
      });
    }

  }, [searchParams]);

  const handleCategory = (category) => {
    setRecipesFilters((oldRecipesFilters) => {
      return {
        ...oldRecipesFilters,
        page: 1,
        categoryIds: [category?.id]
      }
    });
  }

  return (
    <div className="">
      <BannerPage image={img1} title="New Recipes" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft filters={recipesFilters} onClickCategory={handleCategory} />
          <div className="mt-10 md:mt-0 md:col-span-3">
            {
              recipesFilters?.name &&
              <div className="text-center text-4xl mb-16">
                Results for "{recipesFilters?.name}..."
              </div>
            }
            {
              loading &&
              <h1 className="text-4xl text-center">Cargando...</h1>
            }

            {
              recipes?.length === 0 && !loading ?
                <h1 className="text-4xl text-center text-red-500">
                  No results found.
                </h1>
                :
                null
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {
                recipes?.map((recipe) => {
                  return (
                    <Link to={`/recipes/${recipe.slug}`} key={recipe.id}>
                      <CardRecipes
                        texto={recipe.name}
                        price={recipe.price}
                        title={recipe.mealPeriods.map(mp => mp.name).join(' - ')}
                        foto={imgUrl(recipe.images?.[0].path)}
                        sellerLogo={imgUrl(recipe.seller.logo)}
                        sellerName={recipe.seller.name}
                        numberOfIngredients={recipe.recipeIngredients.length}
                        preparationTime={recipe.preparationTime}
                        hideButtons
                        hideCart
                        hideBag
                      />
                    </Link>
                  );
                })}
            </div>
            <br />
            <Pagination
              pages={numberOfPages}
              onChange={(page) => setRecipesFilters((oldFilters) => { return { ...oldFilters, page: page } })}
              activePage={recipesFilters?.page}
            />
          </div>
        </div>
      </div>
      <ModalFiltre show={showModalMenu} onClose={() => setShowModalMenu(false)} />
    </div >
  );
};
export default Recipes;
