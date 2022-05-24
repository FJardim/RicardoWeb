import { Link } from "react-router-dom";
import CardRecipes from "../componentes/CardRecipes";
import Tacos from "../assets/Tacos.jpg";
import { TabsProvider } from "../contexts/TabsContext";
import TabPanel from "../componentes/TabPanel";
import Tab from "../componentes/Tab";
import TabsContainer from "../componentes/TabsContainer";
import Collage from "../assets/ImgCombos.jpeg";

const MyFavoritesUser = () => {
    return (
        <div className="flex">
            <div className="container p-20 md:h-full md:w-full mb-20">
                <p className="md:text-4xl font-bold text-black mb-12">My Favorites</p>
                <div className="md:bg-white p-10 rounded-lg md:h-full md:w-full shadow">
                    <TabsProvider>
                        {/* Tabs */}
                        <TabsContainer className="md:flex m-10 space-x-10">
                            <Tab value={0}>Recipes</Tab>
                            <Tab value={1}>Plans and Combos</Tab>
                        </TabsContainer>
                        {/* TAB PANELS */}
                        {/* Recipes */}
                        <div className="mt-4 p-4">
                            <TabPanel className="animate__animated animate__fadeInUp  md:bg-white rounded-lg" value={0}>
                                <div className="md:grid md:grid-cols-3 gap-10">
                                    <Link to="/recipes/:slug"><CardRecipes
                                        texto="Tacos al Pastor"
                                        parrafo="Ricardo App Team"
                                        title="Dinner"
                                        foto={Tacos}
                                        hideButtons
                                        hideCart
                                    /></Link>
                                    <Link to="/recipes/:slug"><CardRecipes
                                        texto="Tacos al Pastor"
                                        parrafo="Ricardo App Team"
                                        title="Dinner"
                                        foto={Tacos}
                                        hideButtons
                                        hideCart
                                    /></Link>
                                    <Link to="/recipes/:slug"><CardRecipes
                                        texto="Tacos al Pastor"
                                        parrafo="Ricardo App Team"
                                        title="Dinner"
                                        foto={Tacos}
                                        hideButtons
                                        hideCart
                                    /></Link>
                                    <Link to="/recipes/:slug"><CardRecipes
                                        texto="Tacos al Pastor"
                                        parrafo="Ricardo App Team"
                                        title="Dinner"
                                        foto={Tacos}
                                        hideButtons
                                        hideCart
                                    /></Link>
                                </div>
                            </TabPanel>
                            {/* Plans and combos */}
                            <TabPanel className=" bg-white rounded-lg" value={1}>
                                <div className="md:grid md:grid-cols-3 gap-10">
                                    <Link to="/combos/:slug"><CardRecipes
                                        texto="Combos Pierde Peso"
                                        parrafo="Anya Taylor"
                                        title=""
                                        foto={Collage}
                                        hideButtons 
                                        hideCart
                                        />
                                    </Link>
                                    <Link to="/combos/:slug"><CardRecipes
                                        texto="Combos Pierde Peso"
                                        parrafo="Anya Taylor"
                                        title=""
                                        foto={Collage}
                                        hideButtons 
                                        hideCart
                                        />
                                    </Link>
                                    <Link to="/combos/:slug"><CardRecipes
                                        texto="Combos Pierde Peso"
                                        parrafo="Anya Taylor"
                                        title=""
                                        foto={Collage}
                                        hideButtons 
                                        hideCart
                                        />
                                    </Link>
                                    <Link to="/combos/:slug"><CardRecipes
                                        texto="Combos Pierde Peso"
                                        parrafo="Anya Taylor"
                                        title=""
                                        foto={Collage}
                                        hideButtons 
                                        hideCart
                                        />
                                    </Link>
                                    <Link to="/combos/:slug"><CardRecipes
                                        texto="Combos Pierde Peso"
                                        parrafo="Anya Taylor"
                                        title=""
                                        foto={Collage}
                                        hideButtons 
                                        hideCart
                                        />
                                    </Link>
                                </div>
                            </TabPanel>
                        </div>
                    </TabsProvider>
                </div>
            </div>
        </div>
    );
}

export default MyFavoritesUser;