import Cardrecipes from "../componentes/Cardrecipes";
import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.png"

const Contact = () => {
    return (
        <div>
            <BannerPage image={img1} title="New Recipes" />
            <Cardrecipes img={img1} texto="recetas"/>
        </div>
    )
}
export default Contact;