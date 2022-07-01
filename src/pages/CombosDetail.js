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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import useAxios from "../hooks/useAxios";

const ingredients = [
  { id: 1, name: "Plan x" },
  { id: 2, name: "Recipe 1.  " },
  { id: 3, name: "Recipe 2.  " },
  { id: 4, name: "Recipe 3.  " },
  { id: 5, name: "Recipe 4.  " },
];

const productImages = [
  {
    id: 568,
    path: Combos,
    isPortrait: true,
    position: 0,
  },
  {
    id: 569,
    path: Combos,
    isPortrait: false,
    position: 1,
  },
];

const CombosDetail = () => {

  const { slug } = useParams();

  const [{ data: combo, loading: comboLoading }] = useAxios({ url: `/combos/${slug}` });

  const navigate = useNavigate();

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
            detailsLabel={"Include:"}
            details={[...combo.recipes, ...combo.plans]}
            ingredients={[]}
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
