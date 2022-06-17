import BannerChef from "../componentes/BannerChef";
import CardRecipes from "../componentes/CardRecipes";
import banner from "../assets/banner.jpg";
import Tacos from "../assets/Tacos.jpg";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import SelectOrder from "../componentes/SelectOrder";
import ButtomButton from "../componentes/ButtomButton";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import { useFeedBack } from "../contexts/FeedBackContext";
import useRecipes from "../hooks/useRecipes";
import SystemInfo from "../util/SystemInfo";

const RecipesChef = () => {

  const { slug } = useParams();
  const { setLoading } = useFeedBack();

  const [{ data: seller, loading: sellerLoading, error: sellerError }] = useAxios({ url: `/sellers/${slug}` });

  const [{ recipes }] = useRecipes({ params: { sellerId: seller?.sellerId } });

  useEffect(() => {
    setLoading({ message: 'Cargando...', show: sellerLoading });
  }, [sellerLoading, setLoading]);

  return (
    <div className="md:min-w-0">
      <BannerChef seller={seller} title="New Recipes" />
      <div className="px-16 py-10">
        <div className="flex justify-center">
          <ButtonItems defaultCategory="recipes" seller={seller} />
        </div>
        <div className="md:flex md:justify-end m-2 ">
          <SelectOrder />
        </div>
      </div>

      <div className="md:flex p-4 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[300px] md:shrink-0 bg-white mb-10 md:mb-20 md:ml-8 rounded-lg">
          <div className="p-4">
            <InformationChef seller={seller} />
            <CertificationChef seller={seller} />
            <DescriptionChef seller={seller} />
            <Post />
          </div>
        </div>
        <div className="md:w-full">
          <div className="grid md:grid-cols-3 md:gap-4 md:mb-20 md:ml-20 md:mt-2">
            {recipes.map((recipe) => {
              return (
                <CardRecipes
                  key={recipe.id}
                  texto={recipe.name}
                  price={`${recipe?.price}$`}
                  title={recipe.mealPeriods.map(mp => mp.name).join(' - ')}
                  foto={`${SystemInfo?.api}${recipe?.images?.[0]?.path}`}
                  hideButtons
                  hideBag
                />
              );
            })}
          </div>
          <ButtomButton />
        </div>
      </div>
    </div>
  );
};
export default RecipesChef;
