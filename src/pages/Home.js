import Card from "../componentes/Card";
import SwiperHome from "../componentes/SwiperHome";
import SwiperCategoryCard from "../componentes/SwiperCategoryCard";
import WeightPlan from "../componentes/WeightPlan";
import WeightLossPlan from "../assets/wh-plan.jpg";
import logoPlan from "../assets/muestra.png";
import PopularSearch from "../componentes/PopularSearch";
import Popular1 from '../assets/popular1.png';
import Popular2 from '../assets/popular2.png';
const Home = () => {
  return (
    <div>
      <SwiperHome />
      <Card saludo="Category of Recipes" />
      <div className="container ">
        <div className="flex justify-center space-x-6 mx-8">
          <SwiperCategoryCard />

        </div>
      </div>
      <Card saludo="Popular" />
      <div className="flex container ">
        <PopularSearch title="Popular Recipes" img={Popular1} />
        <PopularSearch title="Popular Meal Planners" img={Popular2} />
      </div>

      <Card saludo="Plans" />
      <div className="container flex ">
        <WeightPlan title="Weight loss plan" logo={logoPlan} text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds" img={WeightLossPlan} />
        <WeightPlan title="Weight loss plan" logo={logoPlan} text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds" img={WeightLossPlan} />
        <WeightPlan title="Weight loss plan" logo={logoPlan} text="In this plan you can find the ideal recipes to lose weight in 1 week from 2 pounds" img={WeightLossPlan} />

      </div>
      <Card saludo="Popular by Countries" />
    </div>
  );
};

export default Home;
