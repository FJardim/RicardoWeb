import Card from "../componentes/Card";
import SwiperHome from "../componentes/SwiperHome";
import SwiperCategoryCard from "../componentes/SwiperCategoryCard";
import SwiperWeightPlan from "../componentes/SwiperWeightPlan";
import SwiperPopular from "../componentes/SwiperPopular";
import ChefsCountries from "../componentes/ChefsCountries";
import ChefsW from "../assets/chefsW.jpg";
import ChefsSw from "../assets/chefsSw.jpg";
import FlagIta from "../assets/FlagItalia.jpg";
import FlagMex from "../assets/FlagMexico.png";
import logo from "../assets/img2.jpg";
import SwiperRecipes from "../componentes/SwiperRecipes";

const Home = () => {
  return (
    < div className="" >

      <SwiperHome />
      {/* Category of Recipes */}
      <Card saludo="Category of Recipes" />

      <div className="container ">
        <div className="flex justify-center space-x-6 mx-8">
          <SwiperCategoryCard />
        </div>
      </div>

      {/* Popular */}
      <Card saludo="Popular" />
      <SwiperPopular />
      <Card saludo="Plans" />

      <div className="container flex ">
        <SwiperWeightPlan />
      </div>

      {/* Recipes */}
      <Card saludo="Recipes" />
      <div className="container mt-16 mb-16">
        <SwiperRecipes />
      </div>

      {/* Popular by Countries */}
      <Card saludo="Popular by Countries" />
      <div className="flex container">
        <ChefsCountries imgChefs={ChefsW} LogoBackg={logo} imgFlag={FlagIta} name="Benito" sname="Molina" />
        <ChefsCountries imgChefs={ChefsSw} LogoBackg={logo} imgFlag={FlagMex} name="Giada" sname="de Laurentiis" />
        <ChefsCountries imgChefs={ChefsW} LogoBackg={logo} imgFlag={FlagIta} name="Benito" sname="Molina" />
        <ChefsCountries imgChefs={ChefsSw} LogoBackg={logo} imgFlag={FlagMex} name="Giada" sname="de Laurentiis" />
      </div>

    </div >

  );
};

export default Home;
