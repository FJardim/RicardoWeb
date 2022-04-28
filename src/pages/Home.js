import Card from "../componentes/Card";
import CategorySectionCard from "../componentes/CategorySectionCard";
import SwiperHome from "../componentes/SwiperHome";
import SwiperPopular from "../componentes/SwiperPopular";

const Home = () => {
  return (
    <div>
      <SwiperHome />
      <Card saludo="Category of Recipes" />
      <div className="container mt-20">
        <div className="flex justify-center space-x-6 mx-8">
          <CategorySectionCard
            name="New recipes"
            img="https://api.tubeneficiosi.com/uploads/store-categories/gastronomia.jpg"
          />
          <CategorySectionCard name="Low in calories" />
          <CategorySectionCard name="Paleo" />
          <CategorySectionCard name="High in protein" />
        </div>
      </div>
      <Card saludo="Popular" />
      <div className="flex container mt-20">
        <SwiperPopular />
      </div>

      <Card saludo="Plans" />
      <Card saludo="Popular by Countries" />
    </div>
  );
};

export default Home;
