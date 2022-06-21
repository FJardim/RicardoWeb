import BannerChef from "../componentes/BannerChef";
import CardRecipes from "../componentes/CardRecipes";
import collage from "../assets/collage.jpg";
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
import useCombos from "../hooks/useCombos";
import SystemInfo from "../util/SystemInfo";

const CombosChef = () => {
  const { slug } = useParams();
  const { setLoading } = useFeedBack();

  const [{ data: seller, loading: sellerLoading, error: sellerError }] =
    useAxios({ url: `/sellers/${slug}` });
  const [{ combos, total, numberOfPages, size, error, loading }, getCombos] =
    useCombos();

  useEffect(() => {
    setLoading({ message: "Cargando...", show: sellerLoading });
  }, [sellerLoading, setLoading]);

  return (
    <div className="md:min-w-0">
      <BannerChef seller={seller} title="New Recipes" />
      <div className="px-16 py-10">
        <div className=" flex justify-center">
          <ButtonItems defaultCategory="combos" seller={seller} />
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
            {combos.map((combo) => {
              return (
                <CardRecipes
                  key={combo?.id}
                  texto={combo?.name}
                  price={`${combo?.price}$`}
                  title={combo?.name}
                  foto={`${SystemInfo?.api}${combo?.images?.[0]?.path}`}
                  hideButtons
                  hideClock
                />
              );
            })}
          </div>
          <div className="flex justify-center space-x-2 mb-6">
            <ButtomButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CombosChef;
