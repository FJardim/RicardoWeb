import Pasticho from "../assets/pasticho.png";
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

const ingredients = [
  { id: 1, name: "500 grams of sausage." },
  { id: 2, name: "125 milliliters of warm water." },
  { id: 3, name: "150 grams of black olives." },
  { id: 4, name: "1 pinch of dried basil." },
  { id: 5, name: "2 teaspoons garlic powder." },
  { id: 6, name: "1 1 / 2 teaspoons sage." },
  { id: 7, name: "2 teaspoons ground black pepper." },
  { id: 8, name: "2 teaspoons finely chopped fresh garlic." },
  { id: 9, name: "1 tablespoon of onion." },
  { id: 10, name: "800 grams of tomato sauce." },
  { id: 11, name: "500 grams of lasagna pasta." },
  { id: 12, name: "225 grams of cottage cheese." },
  { id: 13, name: "455 grams of grated mozzarella cheese." },
];

const productImages = [
  {
    id: 568,
    path: Pasticho,
    isPortrait: true,
    position: 0,
  },
  {
    id: 569,
    path: Pasticho,
    isPortrait: false,
    position: 1,
  },
];

const RecipesDetail = () => {
  return (
    <>
      <div className="p-4 md:p-16">
        <div className="flex container p-2 md:space-x-6 md:p-2">
          {/* Imagenes carousel */}
          <div className="md:w-1/2 md:flex md:flex-col">
            <ProductImagesCarousel images={productImages} />
          </div>

          {/* ProductInfo*/}
          <ProductInfo name="Lasagna" ingredients={ingredients} />
        </div>
        <DescriptionCard showPaypalButton hideMarketButtons />
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
              className="animate__animated animate__fadeInUp  bg-white rounded-lg"
              value={0}
            >
              <p className="text-justify p-4">
                Seal ground beef and sausage in a large skillet over medium-high
                heat. Drain excess fat. Add water and black olives and season
                with basil, garlic powder, oregano, sage, pepper, fresh garlic
                and onion. Simmer for 15 minutes, stirring constantly. Add
                tomato sauce and remove from heat.
              </p>
              <p className="text-justify p-4">Preheat oven to 190 °C.</p>
              <p className="text-justify p-4">
                Place a layer of meat and sauce on the bottom of a 23 x 33 cm
                baking dish. Cover with a layer of lasagna. Spread a thin layer
                of cottage cheese over the pasta and sprinkle with a little
                mozzarella cheese. Cover with another layer of sauce and repeat
                the process until you finish with a layer of meat and sauce.
                Reserve about 1/2 cup mozzarella cheese for later use.
              </p>
              <p className="text-justify p-4">
                {" "}
                Bake for about 45 minutes, but check after 30 minutes as cooking
                time may vary depending on how thick the pasta is. You’ll know
                it’s ready when you can easily insert a knife into it. Sprinkle
                the reserved mozzarella cheese and bake for another 10 minutes
                for a perfect gratin.
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
                  imageSource={Pasticho}
                />
                <div className="flex items-center ml-28">
                  <Checkbox />
                </div>
              </IngredientRow>
              <IngredientRow>
                <IngredientRowDetails
                  title={"Noodles"}
                  subtitle={"1 kg"}
                  imageSource={Pasticho}
                />
                <div className="flex items-center ml-28">
                  <Checkbox />
                </div>
              </IngredientRow>
              <IngredientRow>
                <IngredientRowDetails
                  title={"Noodles"}
                  subtitle={"1 kg"}
                  imageSource={Pasticho}
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

export default RecipesDetail;
