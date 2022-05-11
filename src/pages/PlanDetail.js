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
import TabButton from '../componentes/TabButton';
import { useState } from 'react';
import Calendar from '../componentes/Calendar';


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
    const [ingredientsPriceContent, setIngredientsPriceContent] = useState('stores');


    return (
        <>
            <div className="p-4 md:p-16">
                <div className="flex container space-x-6 p-2">

                    {/* Imagenes carousel */}
                    <div className="w-1/2 md:flex md:flex-col">
                        <ProductImagesCarousel images={productImages} />
                    </div>

                    {/* ProductInfo*/}
                    <ProductInfo name="Plan Coconout" ingredients={ingredients} />
                </div>

                {/* Calendar */}
                {/* <div className=''>
                    <FullCalendar plugins={[dayGridPlugin]} />
                </div> */}
                <div className='bg-white container w-full h-full'>
                    <Calendar day="1" />
                    <Calendar day="2" />
                </div>

                {/* Recipes day */}
                <h1 className='text-center m-8 text-6xl font-bold'>Day 1</h1>
                <div className='container p-8'>
                    <div className='grid grid-cols-2 gap-14'>
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
                    <TabsContainer className="md:flex m-10">
                        <Tab value={0}>Preparation</Tab>
                        <Tab value={1}>Ingredients purchase List</Tab>
                        <Tab value={2}>Ingredients price Comparator</Tab>
                    </TabsContainer>

                    {/* TAB PANELS */}
                    {/* Preparation */}
                    <div className="mt-4 p-4">
                        <TabPanel className="animate__animated animate__fadeInUp  bg-white rounded-lg" value={0}>
                            <p className='p-4'>Open our coconut, and save the water that it brings inside, since we will not use it. Extract the meat from the coconut, cut into small cubes and set aside. Put the coconut pieces, coconut milk and condensed milk in the blender, and blend for a couple of minutes, or until thick. </p>
                            <p className='p-4'>Once we take out our cocada, we add sugar and cinnamon to taste, and serve.</p>
                        </TabPanel>

                        {/* Ingredients purchase List */}
                        <TabPanel className=" bg-white rounded-lg" value={1}>
                            <IngredientRow >
                                <IngredientRowDetails
                                    title={"Noodles"}
                                    subtitle={"1 kg"}
                                    imageSource={Coco}
                                />
                                <div className='flex items-center'>
                                    <Checkbox />
                                </div>
                            </IngredientRow>
                            <IngredientRow >
                                <IngredientRowDetails
                                    title={"Noodles"}
                                    subtitle={"1 kg"}
                                    imageSource={Coco}
                                />
                                <div className='flex items-center'>
                                    <Checkbox />
                                </div>
                            </IngredientRow>
                            <IngredientRow >
                                <IngredientRowDetails
                                    title={"Noodles"}
                                    subtitle={"1 kg"}
                                    imageSource={Coco}
                                />
                                <div className='flex items-center'>
                                    <Checkbox />
                                </div>
                            </IngredientRow>
                        </TabPanel>

                        {/* Ingredients price Comparator */}
                        <TabPanel className="bg-white rounded-lg" value={2}>
                            <TabButton
                                setIngredientsPriceContent={setIngredientsPriceContent}
                                ingredientsPriceContent={ingredientsPriceContent}
                            />
                            {ingredientsPriceContent === 'stores'
                                ? <>
                                    <IngredientRow colsNumber={3}>
                                        <IngredientRowDetails
                                            title={"Noodles"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            imageSource={Coco}
                                        />
                                        <IngredientRowDetails
                                            title={"Ground beef"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            price={"$ 4.99"}
                                            imageSource={Coco}
                                        />
                                        <IngredientRowDetails
                                            title={"Parmesan"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            imageSource={Coco}
                                        />
                                    </IngredientRow>
                                    <IngredientRow colsNumber={3}>
                                        <IngredientRowDetails
                                            title={"Noodles"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            imageSource={Coco}
                                        />
                                        <IngredientRowDetails
                                            title={"Ground beef"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            price={"$ 4.99"}
                                            imageSource={Coco}
                                        />
                                        <IngredientRowDetails
                                            title={"Parmesan"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            imageSource={Coco}
                                        />
                                    </IngredientRow>
                                </>
                                :
                                <>
                                    <IngredientRow colsNumber={2}>
                                        <IngredientRowDetails
                                            title={"Noodles"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            imageSource={Coco}
                                        />
                                        <IngredientRowDetails
                                            title={"Ground beef"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            price={"$ 4.99"}
                                            imageSource={Coco}
                                        />
                                    </IngredientRow>
                                    <IngredientRow colsNumber={2}>
                                        <IngredientRowDetails
                                            title={"Noodles"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            imageSource={Coco}
                                        />
                                        <IngredientRowDetails
                                            title={"Ground beef"}
                                            subtitle={"Juncal 2930"}
                                            subtitle2={"1250 1st Ave S, Seattle, wa 98134, EE.UU."}
                                            price={"$ 4.99"}
                                            imageSource={Coco}
                                        />
                                    </IngredientRow>
                                </>
                            }
                        </TabPanel>
                    </div>
                </TabsProvider>
            </div >
        </>
    );
}

export default PlanDetail;