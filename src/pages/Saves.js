import CardRecipes from "../componentes/CardRecipes";
import Collage from "../assets/ImgCombos.jpeg";
import Tacos from "../assets/Tacos.jpg";
import { Link } from "react-router-dom";

const Saves = () => {
    return (
        <div className="flex">
            <div className="container p-4 md:p-20 h-full w-full mb-20">
                <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">My Saves</p>
                <div className="bg-white p-8 md:p-10 rounded-lg h-full w-full shadow">
                    <div className="md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5">
                        <Link to="/combos/:slug"><CardRecipes
                            texto="Combos Pierde Peso"
                            parrafo="Anya Taylor"
                            title=""
                            foto={Collage}
                            hideButtons
                            hideCart
                            hideClock
                        />
                        </Link>
                        <Link to="/recipes/:slug"><CardRecipes
                            texto="Tacos al Pastor"
                            parrafo="Ricardo App Team"
                            title="Dinner"
                            foto={Tacos}
                            hideButtons
                            hideCart
                            hideBag
                        /></Link>
                        <Link to="/combos/:slug"><CardRecipes
                            texto="Combos Pierde Peso"
                            parrafo="Anya Taylor"
                            title=""
                            foto={Collage}
                            hideButtons
                            hideCart
                            hideClock
                        />
                        </Link>
                        <Link to="/recipes/:slug"><CardRecipes
                            texto="Tacos al Pastor"
                            parrafo="Ricardo App Team"
                            title="Dinner"
                            foto={Tacos}
                            hideButtons
                            hideCart
                            hideBag
                        /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saves;