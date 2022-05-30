import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.png";
import Tacos from "../assets/protein.jpg";
import { Link } from "react-router-dom";
import ButtomButton from "../componentes/ButtomButton";
import ButtonSupr from "../componentes/ButtonSupr";
import MenuLeft from "../componentes/MenuLeft";
import useRecipes from "../hooks/useRecipes";
import { useEffect, useState } from "react";
import SystemInfo from "../util/SystemInfo";

const Recipes = () => {

  const [recipesFilters, setRecipesFilters] = useState({
    page: 1,
    perPage: 12
  });

  const [currentRecipes, setCurrentRecipes] = useState([]);

  const [{ recipes, total, numberOfPages, size, error, loading }, getRecipes] = useRecipes({ axiosConfig: { params: { ...recipesFilters } } });

  useEffect(() => {
    if (recipes?.length > 0) {
      setCurrentRecipes((oldRecipes) => {
        return [...oldRecipes, ...recipes];
      })
    }
  }, [recipes])

  return (
    <div className="">
      <BannerPage image={img1} title="New Recipes" />
      <div className="container p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft />
          <div className="mt-10 md:mt-0 md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
              {currentRecipes?.map((recipe, i) => {
                return (
                  <Link to={`/recipes/${recipe?.slug}`} key={i}>
                    <CardRecipes
                      texto={`${recipe?.name}`}
                      parrafo="Ricardo App Team"
                      title={`${recipe?.mealPeriods?.[0]?.name}`}
                      foto={`${SystemInfo?.api}${recipe?.recipeImages?.[0]?.path}`}
                      hideCart
                    />
                  </Link>
                );
              })}
            </div>
            <br />
            <ButtomButton />
          </div>
        </div>
      </div>
    </div >
  );
};
export default Recipes;
