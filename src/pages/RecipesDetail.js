import Pasticho from "../assets/pasticho.png";
import ProductImagesCarousel from "../componentes/ProductImagesCarousel";
import ProductInfo from "../componentes/ProductInfo";
import { TabsProvider } from "../contexts/TabsContext";
import Tab from "../componentes/Tab";
import TabsContainer from "../componentes/TabsContainer";
import TabPanel from '../componentes/TabPanel';
import IngredientRow from '../componentes/IngredientRow';
import IngredientRowDetails from '../componentes/IngredientRowDetails';
import Checkbox from '../componentes/Checkbox';
import WaPay from '../componentes/WaPay';
import DescriptionCard from "../componentes/DescriptionCard";
import useAxios from '../hooks/useAxios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFeedBack } from '../contexts/FeedBackContext';
import imgUrl from "../helpers/imgUrl";
import useRecipe from "../hooks/useRecipe";
import favoriteTypes from "../consts/favoriteTypes";

const RecipesDetail = () => {
  const { setLoading } = useFeedBack();

  const { slug } = useParams();

  const navigate = useNavigate();

  const [{ recipe, recipeLoading, setRecipe }] = useRecipe(slug);

  const [{ data: createFavoriteData, loading: createFavoriteLoading }, createFavorite] = useAxios({ url: '/favorites', method: 'POST' }, { manual: true });

  const [{ data: toggleSavedData, loading: toggleSavedLoading }, toggleSaved] = useAxios({ url: '/saved/toggle', method: 'POST' }, { manual: true });

  useEffect(() => {
    setLoading({ message: 'Cargando receta', show: recipeLoading });
  }, [recipeLoading]);

  useEffect(() => {
    setLoading({ message: 'Cargando', show: createFavoriteLoading });
  }, [createFavoriteLoading]);

  useEffect(() => {
    setLoading({ message: 'Guardando', show: toggleSavedLoading });
  }, [toggleSavedLoading]);

  useEffect(() => {
    if (createFavoriteData) {
      navigate('/recipes', { replace: true });
    }
  }, [createFavoriteData]);

  useEffect(() => {
    if (typeof toggleSavedData !== 'undefined') {
      setRecipe(prevData => ({
        ...prevData,
        saved: toggleSavedData,
      }));
    }
  }, [toggleSavedData]);

  const handleFavoriteClicked = ({ type, reaction }) => {
    if (!recipe) {
      return;
    }

    createFavorite({
      data: {
        type,
        reaction,
        recipeId: recipe.id
      }
    });
  }

  const handleSavedClicked = ({ type }) => {
    if (!recipe) {
      return;
    }
    
    toggleSaved({ data: {
      type,
      recipeId: recipe.id,
    }});
  }

  return (
    <>
      <div className="p-4 md:p-16">
        <div className="flex container p-2 md:space-x-6 md:p-2">
          {/* Imagenes carousel */}
          <div className="md:w-1/2 md:flex md:flex-col">
            <ProductImagesCarousel images={recipe?.images} />
          </div>

          {/* ProductInfo*/}
          <ProductInfo
            name={recipe?.name}
            price={`$${recipe?.price}`}
            ingredients={recipe?.recipeIngredients}
            onFavoriteClicked={handleFavoriteClicked}
            onSaveClicked={handleSavedClicked}
            saved={recipe?.saved}
            type={favoriteTypes.RECIPE}
          />
        </div>

        <DescriptionCard
          showMarketButtons
          recipe={recipe}
        />

        <TabsProvider>
          {/* Tabs */}
          <TabsContainer className="md:flex flex md:m-10 m-2 mt-6 text-center">
            <Tab value={0}>Preparation</Tab>
            <Tab value={1}>Ingredients purchase List</Tab>
            <Tab value={2}>Price Comparator</Tab>
          </TabsContainer>

          {/* TAB PANELS */}
          {/* Preparation */}
          <div className="mt-4 md:p-4">
            <TabPanel
              className="animate__animated animate__fadeInUp  bg-white rounded-lg p-4"
              value={0}
            >
              <ul className="space-y-4 pl-4 list-disc">
                {recipe?.recipeSteps.map(recipeStep => <li key={recipeStep.id}>{recipeStep.content}</li>)}
              </ul>
            </TabPanel>

            {/* Ingredients purchase List */}
            <TabPanel
              className="animate__animated animate__fadeInUp bg-white rounded-lg"
              value={1}
            >
              {recipe?.recipeIngredients.map(recipeIngredient => <IngredientRow key={recipeIngredient.id}>
                <IngredientRowDetails
                  title={recipeIngredient.ingredient.name}
                  subtitle={`${recipeIngredient.value} ${recipeIngredient.measurementUnit.name}`}
                  imageSource={imgUrl(recipeIngredient.ingredient.icon)}
                />
                <div className="flex items-center ml-28">
                  <Checkbox />
                </div>
              </IngredientRow>)}
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

export default RecipesDetail;
