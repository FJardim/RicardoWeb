import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
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

const RecipesDetail = () => {


    return (
        <>
            <div className="p-4 md:p-16">
                <div className="flex container space-x-6 p-2">

                    {/* Imagenes carousel */}
                    <div className="w-1/2 md:flex md:flex-col">
                        <ProductImagesCarousel images={productImages} />
                    </div>

                    {/* ProductInfo*/}
                    <ProductInfo />
                </div>

                {/* Calendar */}
                <div className=''>
                    <FullCalendar plugins={[dayGridPlugin]} />
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
                    <TabsContainer className="md:flex">
                        <Tab value={0}>Preparation</Tab>
                        <Tab value={1}>Ingredients purchase List</Tab>
                        <Tab value={2}>Ingredients price Comparator</Tab>
                    </TabsContainer>

                    {/* TAB PANELS */}
                    {/* Preparation */}

                    <TabPanel className="py-4 animate__animated animate__fadeInUp" value={0}>
                        <p>Abrir nuestro coco, y guardar el agua que trae en su interior, ya que no la utilizaremos.
                            Extraer la carne del coco, cortar en cubos pequeños y apartar.
                            Poner los trozos de coco, la leche de coco y la leche condensada en la licuadora, y licuar por un par de minutos, o hasta que adquiera un estado de espesor.
                            Una vez que sacamos nuestra cocada, agregamos azúcar y canela al gusto, y servimos.</p>
                    </TabPanel>
                    {/* Ingredients purchase List */}

                    {/* Ingredients price Comparator */}

                </TabsProvider>

            </div >
        </>
    );
}

export default RecipesDetail;