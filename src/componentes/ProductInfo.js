import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import ShowMoreButton from "./ShowMoreButton";
import favoriteReactions from "../consts/favoriteReactions"

const ProductInfo = ({
  name,
  description,
  ingredients = [],
  maxIngredientsCount = 8,
  onFavoriteClicked,
  onSaveClicked,
  haveDiscount,
  price,
  detailsLabel,
  details,
  maxDetailsCount = 8,
  saved = false,
  type,
}) => {
  const handleFavoriteClicked = (reaction) => () => onFavoriteClicked?.({ type, reaction });

  const handleSaveClicked = () => onSaveClicked?.({ type });

  return (
    <div className="w-full md:w-1/2 md:px-8">
      <div className="md:flex items-center text-3xl md:justify-between">
        <h1 className="font-bold text-2xl md:ml-1 md:block w-full text-center md:text-left">{name}</h1>
        <div className="md:flex space-x-4 md:m-2 md:m-auto mt-4 flex justify-center ">
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
          {saved
            ? <IoHeart
              className='text-main cursor-pointer w-10 h-10'
              data-tip="Save"
              onClick={handleSaveClicked}
              />
            : <IoHeartOutline
              className='text-main cursor-pointer w-10 h-10'
              data-tip="Save"
              onClick={handleSaveClicked}
            />
          }
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
          {description
            ? <>
              <p>{description}</p>
            </>
            : <>
              <h4 className="font-semibold mb-3">{detailsLabel}</h4>
                {details?.slice(0, maxDetailsCount).map((detail) => (
                  <a key={detail.id} style={{ display: 'block' }} href={detail.uri}>{detail?.name}</a>
                ))}
                {ingredients?.slice(0, maxIngredientsCount).map((ingredient) => (
                  <div key={ingredient.id}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
                ))}
                <ShowMoreButton
                  buttonText="Show more"
                  content={details?.slice(maxDetailsCount).map((detail) => (
                    <a key={detail.id} href={detail.uri}>{detail?.name}</a>
                  ))}
                />
                <ShowMoreButton
                  buttonText="Show more"
                  content={ingredients?.slice(maxIngredientsCount).map((ingredient) => (
                    <div key={ingredient.id}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
                  ))}
                />
            </>
          }
          
        </div>
      </div>
      <div>
        <div className="text-main text-3xl font-semibold">
          <div className="mt-2">
            <p className="text-main">{price}</p>
            {
              haveDiscount &&
              <p className="text-gray-400 text-sm">$48.56</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
