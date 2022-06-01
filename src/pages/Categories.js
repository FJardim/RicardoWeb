import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.png";
import food from "../assets/food.jfif";
import food2 from "../assets/food2.jfif";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.jpg";
import CategorySectionCard from "../componentes/CategorySectionCard";

const Categories = () => {
  return (
    <div>
      <BannerPage image={img1} title="Category" />
      <div className="grid md:grid-cols-4 mr-6 ml-6 gap-5 md:gap-10  py-20">
        <CategorySectionCard img={food} name="New Recipes" className={"py-16"} />
        <CategorySectionCard img={food2} name="Low in Calories" className={"py-16"} />
        <CategorySectionCard img={food3} name="Paleo" className={"py-16"} />
        <CategorySectionCard img={food4} name="Hight in Protein" className={"py-16"} />
        <CategorySectionCard img={food} name="New Recipes" className={"py-16"} />
        <CategorySectionCard img={food2} name="Low in Calories" className={"py-16"} />
        <CategorySectionCard img={food3} name="Paleo" className={"py-16"} />
        <CategorySectionCard img={food4} name="Hight in Protein" className={"py-16"} />
        <CategorySectionCard img={food} name="New Recipes" className={"py-16"} />
        <CategorySectionCard img={food2} name="Low in Calories" className={"py-16"} />
        <CategorySectionCard img={food3} name="Paleo" className={"py-16"} />
        <CategorySectionCard img={food4} name="Hight in Protein" className={"py-16"} />
        <CategorySectionCard img={food} name="New Recipes" className={"py-16"} />
        <CategorySectionCard img={food2} name="Low in Calories" className={"py-16"} />
        <CategorySectionCard img={food3} name="Paleo" className={"py-16"} />
        <CategorySectionCard img={food4} name="Hight in Protein" className={"py-16"} />
      </div>
    </div>
  );
};

export default Categories;
