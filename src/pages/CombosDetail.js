import Combos from "../assets/combosImg.png";
import ProductImagesCarousel from "../componentes/ProductImagesCarousel";
import ProductInfo from "../componentes/ProductInfo";
import { TabsProvider } from "../contexts/TabsContext";
import Tab from "../componentes/Tab";
import TabsContainer from "../componentes/TabsContainer";
import TabPanel from "../componentes/TabPanel";
import IngredientRow from "../componentes/IngredientRow";
import IngredientRowDetails from "../componentes/IngredientRowDetails";
import Checkbox from "../componentes/Checkbox";
import WaPay from "../componentes/WaPay";
import DescriptionCard from "../componentes/DescriptionCard";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import useAxios from "../hooks/useAxios";
import favoriteTypes from "../consts/favoriteTypes";
import { useFeedBack } from "../contexts/FeedBackContext";
import useCombo from "../hooks/useCombo";

const CombosDetail = () => {
  const { setLoading } = useFeedBack();

  const { slug } = useParams();

  const navigate = useNavigate();

  const [{ combo, comboLoading, setCombo }] = useCombo(slug);

  const [{ data: createFavoriteData, loading: createFavoriteLoading }, createFavorite] = useAxios({ url: '/favorites', method: 'POST' }, { manual: true });

  const [{ data: toggleSavedData, loading: toggleSavedLoading }, toggleSaved] = useAxios({ url: '/saved/toggle', method: 'POST' }, { manual: true });

  useEffect(() => {
    setLoading({ message: 'Cargando combo', show: comboLoading });
  }, [comboLoading]);

  useEffect(() => {
    setLoading({ message: 'Cargando', show: createFavoriteLoading });
  }, [createFavoriteLoading]);

  useEffect(() => {
    setLoading({ message: 'Guardando', show: toggleSavedLoading });
  }, [toggleSavedLoading]);

  useEffect(() => {
    if (createFavoriteData) {
      navigate(createFavoriteData.nextSlug ? `/combos/${createFavoriteData.nextSlug}` : '/combos', { replace: true });
    }
  }, [createFavoriteData]);

  useEffect(() => {
    if (typeof toggleSavedData !== 'undefined') {
      setCombo(prevData => ({
        ...prevData,
        saved: toggleSavedData,
      }));
    }
  }, [toggleSavedData]);

  const handleFavoriteClicked = ({ type, reaction }) => {
    if (!combo) {
      return;
    }

    createFavorite({
      data: {
        type,
        reaction,
        comboId: combo.id
      }
    });
  }

  const handleSavedClicked = ({ type }) => {
    if (!combo) {
      return;
    }
    
    toggleSaved({ data: {
      type,
      comboId: combo.id,
    }});
  }

  return (
    <>
      <div className="p-4 md:p-16">
        <div className="flex container p-2 md:space-x-6 md:p-2">
          {/* Imagenes carousel */}
          <div className="md:w-1/2 md:flex md:flex-col">
            <ProductImagesCarousel images={combo?.images} />
          </div>

          {/* ProductInfo*/}
          <ProductInfo
            name={combo?.name}
            price={`$${combo?.price}`}
            detailsLabel={"Includes:"}
            details={[
              ...combo?.recipes.map(recipe => ({...recipe, uri: `/recipes/${recipe.slug}`})) ?? [],
              ...combo?.plans.map(plan => ({...plan, uri: `/plans/${plan.slug}`})) ?? []
            ]}
            type={favoriteTypes.COMBO}
            onSaveClicked={handleSavedClicked}
            onFavoriteClicked={handleFavoriteClicked}
            saved={combo?.saved}
          />
        </div>

        {/* DescriptionCard*/}
        <DescriptionCard
          showPaypalButton
          hideMarketButtons
        />

        <TabsProvider>
          {/* Tabs */}
          <TabsContainer className="md:flex flex md:m-10 m-2 mt-6 text-center">
            <Tab value={0}>Descrition</Tab>
            <Tab value={1}>Ingredients purchase List</Tab>
            <Tab value={2}>Price Comparator</Tab>
          </TabsContainer>

          {/* TAB PANELS */}
          {/* Preparation */}
          <div className="mt-4 p-4">
            <TabPanel
              className="animate__animated animate__fadeInUp  bg-white rounded-lg"
              value={0}
            >
              <p className="text-justify p-4">
                Quia necessitatibus cum illo nemo est repudiandae voluptatibus
                hic internos totam et recusandae nulla. Ut velit alias in
                expedita laboriosam est blanditiis consectetur aut rerum
                dignissimos vel veritatis nesciunt et o dit aspernatur. At
                molestiae soluta et consequatur cupiditate cum omnis velit qui
                iusto debitis et dicta itaque.
              </p>
            </TabPanel>

            {/* Ingredients purchase List */}
            <TabPanel
              className="animate__animated animate__fadeInUp bg-white rounded-lg"
              value={1}
            >
              <IngredientRow>
                <IngredientRowDetails
                  title={"Noodles"}
                  subtitle={"1 kg"}
                  imageSource={Combos}
                />
                <div className="flex items-center ml-28">
                  <Checkbox />
                </div>
              </IngredientRow>
              <IngredientRow>
                <IngredientRowDetails
                  title={"Noodles"}
                  subtitle={"1 kg"}
                  imageSource={Combos}
                />
                <div className="flex items-center ml-28">
                  <Checkbox />
                </div>
              </IngredientRow>
              <IngredientRow>
                <IngredientRowDetails
                  title={"Noodles"}
                  subtitle={"1 kg"}
                  imageSource={Combos}
                />
                <div className="flex items-center ml-28">
                  <Checkbox />
                </div>
              </IngredientRow>
            </TabPanel>

            {/* Ingredients price Comparator */}
            <TabPanel
              className="animate__animated animate__fadeInUp bg-white rounded-lg"
              value={2}
            >
              <WaPay />
            </TabPanel>
          </div>
        </TabsProvider>
      </div>
    </>
  );
};

export default CombosDetail;
