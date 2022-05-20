import CardRecipes from "../componentes/CardRecipes";
import Collage from "../assets/ImgCombos.jpeg";
import Tacos from "../assets/Tacos.jpg";
import { Link } from "react-router-dom";

const Saves = () => {
    return (
        <div className="flex">
            <div className="container p-20 h-full w-full mb-20">
                <p className="text-4xl font-bold text-black mb-12">My Saves</p>
                <div className="bg-white p-10 rounded-lg h-full w-full shadow">
                    <div className="grid grid-cols-3 gap-10 mt-4 p-4">
                        <Link to="/combos/:slug"><CardRecipes
                            texto="Combos Pierde Peso"
                            parrafo="Anya Taylor"
                            title=""
                            foto={Collage}
                            hideButtons 
                            hideCart
                            />
                        </Link>
                        <Link to="/recipes/:slug"><CardRecipes
                            texto="Tacos al Pastor"
                            parrafo="Ricardo App Team"
                            title="Dinner"
                            foto={Tacos}
                            hideButtons
                            hideCart
                        /></Link>
                        <Link to="/combos/:slug"><CardRecipes
                            texto="Combos Pierde Peso"
                            parrafo="Anya Taylor"
                            title=""
                            foto={Collage}
                            hideButtons 
                            hideCart
                            />
                        </Link>
                        <Link to="/recipes/:slug"><CardRecipes
                            texto="Tacos al Pastor"
                            parrafo="Ricardo App Team"
                            title="Dinner"
                            foto={Tacos}
                            hideButtons
                            hideCart
                        /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saves;