import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import ShowMoreButton from "./ShowMoreButton";

const ProductInfo = ({ name, ingredients }) => {
  return (
    <div className="md:w-1/2 md:px-8">
      <div className="md:flex items-center text-3xl md:justify-between">
        <h1 className="font-bold text-2xl md:ml-1 ml-2 md:block">{name}</h1>
        <div className="md:flex space-x-4 md:m-2 md:m-auto mt-4 container flex justify-center ">
          <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn">
            <AiOutlineClose className="text-red-500" />
          </button>
          <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn">
            <AiOutlineCheck className="text-green-700" />
          </button>
          <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn">
            <BsFillEmojiLaughingFill className="text-yellow-300" />
          </button>
          <IoHeartOutline className="text-main cursor-pointer w-10 h-10" />
        </div>
      </div>

      <div className="flex">
        <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
        <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
        <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
        <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
        <AiOutlineStar className="mt-2 text-gray-300 h-6 w-6" />
        <p className="text-gray-300 text-lg m-2 underline">
          (1 customer review)
        </p>
      </div>
      <div className="bg-white rounded-lg py-4">
        <div className="m-8 text-lg">
          {ingredients.map((ingredient) => (
            <div key={ingredient.id}>{ingredient.name}</div>
          ))}
          <ShowMoreButton
            buttonText={`Mostrar mas`}
            content={`Mas Contenido`}
          />
        </div>
      </div>

      {/*<*/}
    </div>
  );
};

export default ProductInfo;
