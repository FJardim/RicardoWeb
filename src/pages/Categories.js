import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.png";
import food from "../assets/food.jfif";
import food2 from "../assets/food2.jfif";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.jpg";
import Description from "../componentes/Description";

const Categories = () => {
  return (
    <div>
      <BannerPage image={img1} title="Category Of Recipes" />
      <div className="flex container flex-wrap">
        <Description img={food} texto="New Recipes" />
        <Description img={food2} texto="Low in Calories" />
        <Description img={food3} texto="Paleo" />
        <Description img={food4} texto="Hight in Protein" />
        <Description img={food} texto="New Recipes" />
        <Description img={food2} texto="Low in Calories" />
        <Description img={food3} texto="Paleo" />
        <Description img={food4} texto="Hight in Protein" />
        <Description img={food} texto="New Recipes" />
        <Description img={food2} texto="Low in Calories" />
        <Description img={food3} texto="Paleo" />
        <Description img={food4} texto="Hight in Protein" />
        <Description img={food} texto="New Recipes" />
        <Description img={food2} texto="Low in Calories" />
        <Description img={food3} texto="Paleo" />
        <Description img={food4} texto="Hight in Protein" />
      </div>
    </div>
  );
};

export default Categories;
