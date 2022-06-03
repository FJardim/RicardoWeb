import Pasticho from '../assets/pasticho.png';
import Bebida from '../assets/bebida.png';
import Coco from '../assets/coco.jpg';
import Recipes from '../componentes/Recipes';
import ProductImagesCarousel from '../componentes/ProductImagesCarousel';
import ProductInfo from '../componentes/ProductInfo';
import { TabsProvider } from "../contexts/TabsContext";
import Tab from "../componentes/Tab";
import TabsContainer from "../componentes/TabsContainer";
import TabPanel from '../componentes/TabPanel';
import IngredientRow from '../componentes/IngredientRow';
import IngredientRowDetails from '../componentes/IngredientRowDetails';
import Checkbox from '../componentes/Checkbox';
import Calendar from '../componentes/Calendar';
import WaPay from '../componentes/WaPay';


const ingredients = [
    { id: 1, name: '3 cups rice.' },
    { id: 2, name: '1 tablespoon ground cinnamon or cinnamon splinter.' },
    { id: 3, name: '1 lirer od milk.' },
    { id: 4, name: '1 can co ndenses milk.' },
    { id: 5, name: 'Half a teaspoon of cloves.' },
    { id: 6, name: 'Sugar to taste.' },
];

const productImages = [
    {
        "id": 568,
        "path": Coco,
        "isPortrait": true,
        "position": 0
    },
    {
        "id": 569,
        "path": Coco,
        "isPortrait": false,
        "position": 1
    }
]

const PlanDetail = () => {

    return (
        <>
            <div className="p-4 md:p-16">
                <div className="flex container p-2 md:space-x-6 md:p-2">

                    {/* Imagenes carousel */}
                    <div className="md:w-1/2 md:flex md:flex-col">
                        <ProductImagesCarousel images={productImages} />
                    </div>

                    {/* ProductInfo*/}
                    <ProductInfo
                        name="Plan Recipes Cold Coconout"
                        ingredients={ingredients}
                        showPaypalButton
                        hideMarketButtons
                    />
                </div>

                {/* Calendar */}
                <div className='mt-4 rounded-lg bg-white container w-full h-full grid grid-cols-2 md:grid-cols-1'>
                    <Calendar day="1" />
                    <Calendar day="2" />
                </div>

                {/* Recipes day */}
                <h1 className='text-center m-8 md:text-6xl text-3xl font-bold'>Day 1</h1>
                <div className='container md:p-8'>
                    <div className='md:grid md:grid-cols-2 md:gap-14 space-y-4'>
                        <Recipes
                            title="Lasagna"
                            descsh="Space for a small product description"
                            cost="$36.99"
                            desccost="Pescription cost"
                            level="Expert"
                            time="60-80 Minutes"
                            ing="5 pcs"
                            img={Pasticho}
                            withDefaultButtons={false}
                        />
                        <Recipes
                            title="Margarita"
                            descsh="Space for a small product description"
                            cost="$6.99"
                            desccost="Pescription cost"
                            level="Easy"
                            time="6-8 Minutes"
                            ing="3 pcs"
                            img={Bebida}
                            withDefaultButtons={false}
                        />
                        <Recipes
                            title="Margarita"
                            descsh="Space for a small product description"
                            cost="$6.99"
                            desccost="Pescription cost"
                            level="Easy"
                            time="6-8 Minutes"
                            ing="3 pcs"
                            img={Bebida}
                            withDefaultButtons={false}
                        />
                        <Recipes
                            title="Lasagna"
                            descsh="Space for a small product description"
                            cost="$36.99"
                            desccost="Pescription cost"
                            level="Expert"
                            time="60-80 Minutes"
                            ing="5 pcs"
                            img={Pasticho}
                            withDefaultButtons={false}
                        />
                    </div>
                </div>
                <TabsProvider>
                    {/* Tabs */}
                    <TabsContainer className="md:flex flex md:m-10 m-2 mt-6 text-center">
                        <Tab value={0}>Preparation</Tab>
                        <Tab value={1}>Ingredients purchase List</Tab>
                        <Tab value={2}>Ingredients price Comparator</Tab>
                    </TabsContainer>

                    {/* TAB PANELS */}
                    {/* Preparation */}
                    <div className="mt-4 md:p-4">
                        <TabPanel className="animate__animated animate__fadeInUp  bg-white rounded-lg " value={0}>
                            <p className='text-justify p-4'>Open our coconut, and save the water that it brings inside, since we will not use it. Extract the meat from the coconut, cut into small cubes and set aside. Put the coconut pieces, coconut milk and condensed milk in the blender, and blend for a couple of minutes, or until thick. </p>
                            <p className='text-justify p-4'>Once we take out our cocada, we add sugar and cinnamon to taste, and serve.</p>
                        </TabPanel>

                        {/* Ingredients purchase List */}
                        <TabPanel className="animate__animated animate__fadeInUp bg-white rounded-lg" value={1}>
                            <IngredientRow >
                                <IngredientRowDetails
                                    title={"Noodles"}
                                    subtitle={"1 kg"}
                                    imageSource={Coco}
                                />
                                <div className='flex items-center ml-28 '>
                                    <Checkbox />
                                </div>
                            </IngredientRow>
                            <IngredientRow >
                                <IngredientRowDetails
                                    title={"Noodles"}
                                    subtitle={"1 kg"}
                                    imageSource={Coco}
                                />
                                <div className='flex items-center ml-28'>
                                    <Checkbox />
                                </div>
                            </IngredientRow>
                            <IngredientRow >
                                <IngredientRowDetails
                                    title={"Noodles"}
                                    subtitle={"1 kg"}
                                    imageSource={Coco}
                                />
                                <div className='flex items-center ml-28'>
                                    <Checkbox />
                                </div>
                            </IngredientRow>
                        </TabPanel>

                        {/* Ingredients price Comparator */}
                        <TabPanel className="animate__animated animate__fadeInUp bg-white rounded-lg" value={2}>
                            <WaPay />
                        </TabPanel>
                    </div>
                </TabsProvider>
            </div >
        </>
    );
}

export default PlanDetail;