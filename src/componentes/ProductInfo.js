import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import ShowMoreButton from "./ShowMoreButton";
import favoriteReactions from "../consts/favoriteReactions"

const ProductInfo = ({
  name,
  ingredients,
  maxIngredientsCount = 8,
  onFavoriteClicked,
  haveDiscount,
  price,
  detailsLabel,
  details,
  maxDetailsCount = 8
}) => {
  const handleFavoriteClicked = (reaction) => () => onFavoriteClicked?.({ type: 'recipe', reaction });

  return (
    <div className="md:w-1/2 md:px-8">
      <div className="md:flex items-center text-3xl md:justify-between">
        <h1 className="font-bold text-2xl md:ml-1 ml-2 md:block">{name}</h1>
        <div className="md:flex space-x-4 md:m-2 md:m-auto mt-4 container flex justify-center ">
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.DISLIKE)}
            data-tip="I don't like this!"
          >
            <AiOutlineClose className="text-red-500" />
          </button>
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.LIKE)}
            data-tip="I like this!"
          >
            <AiOutlineCheck className="text-green-700" />
          </button>
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.LOVE_IT)}
            data-tip="Great!"
          >
            <BsFillEmojiLaughingFill className="text-yellow-300" />
          </button>
          <IoHeartOutline
            className='text-main cursor-pointer w-10 h-10'
            data-tip="Save"
          />
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
      <div className="bg-white rounded-lg p-4">
        <div className="text-lg">
          <h4 className="font-semibold mb-3">{detailsLabel}</h4>
          {details?.slice(0, maxDetailsCount).map((detail) => (
            <a key={detail.id} href={`/recipes/${detail.slug}`}>{detail?.name}</a>
          ))}
          {ingredients?.slice(0, maxIngredientsCount).map((ingredient) => (
            <div key={ingredient.id}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
          ))}
          <ShowMoreButton
            buttonText="Show more"
            content={details?.slice(maxDetailsCount).map((detail) => (
              <a key={detail.id} href={`/recipes/${detail.slug}`}>{detail?.name}</a>
            ))}
          />
          <ShowMoreButton
            buttonText="Show more"
            content={ingredients?.slice(maxIngredientsCount).map((ingredient) => (
              <div key={ingredient.id}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
            ))}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center md:my-4 p-4 bg-white rounded-md mt-16">
          <div className="text-main text-3xl font-semibold">
            <div>
              <p className="text-main">{price}</p>
              {
                haveDiscount &&
                <p className="text-gray-400 text-sm">$48.56</p>
              }
            </div>
          </div>
          <div className="flex">
            <button className=" px-4 py-2.5 rounded-xl ml-24 block text-white font-bold bg-main hover:bg-main-dark">
              + Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
