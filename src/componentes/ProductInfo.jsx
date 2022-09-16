import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import ShowMoreButton from "./ShowMoreButton";
import favoriteReactions from "../consts/favoriteReactions"
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import usePaymentMethods from "../hooks/usePaymentMethods";
import imgUrl from "../helpers/imgUrl";
import { useFeedBack } from "../contexts/FeedBackContext";

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
  isPremiun,
  type,
  sellerId,
  productId,
  productType,
}) => {

  const { setLoading } = useFeedBack();

  const [{ data: createOrderData, loading: createOrderLoading }, createOrder] = useAxios({ method: 'POST', url: `/orders` }, { manual: true, useCache: false });

  const [{ paymentMethods, total, numberOfPages, size, error, loading }, getPaymentMethods] = usePaymentMethods();

  useEffect(() => {
    setLoading({
      show: createOrderLoading,
      message: 'Loading'
    })
  }, [createOrderLoading])

  useEffect(() => {
    if (paymentMethods) {
      console.log(paymentMethods);
    }
  }, [paymentMethods])

  useEffect(() => {
    if (createOrderData) {
      window.open(createOrderData?.url, "_blank");
    }
  }, [createOrderData])

  const handleFavoriteClicked = (reaction) => () => onFavoriteClicked?.({ type, reaction });

  const handleSaveClicked = () => onSaveClicked?.({ type });

  const handleBuy = (paymentMethodCode) => {
    createOrder({
      data: {
        sellerId,
        productId,
        type: productType,
        paymentMethodCode: paymentMethodCode || null
      }
    });
  }

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
              {details?.slice(0, maxDetailsCount).map((detail, i) => (
                <a key={i} style={{ display: 'block' }} href={detail.uri}>{detail?.name}</a>
              ))}
              {ingredients?.slice(0, maxIngredientsCount).map((ingredient, i) => (
                <div key={i}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
              ))}
              <ShowMoreButton
                buttonText="Show more"
                content={details?.slice(maxDetailsCount).map((detail, i) => (
                  <a key={i} href={detail.uri}>{detail?.name}</a>
                ))}
              />
              <ShowMoreButton
                buttonText="Show more"
                content={ingredients?.slice(maxIngredientsCount).map((ingredient, i) => (
                  <div key={i}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
                ))}
              />
            </>
          }
        </div>
      </div>
      <div>
        <div className="text-main text-3xl font-semibold">
          <div className="mt-8 flex items-center justify-between">
            <p className="text-main">{price}</p>
            {
              isPremiun ?
                <div className="w-1/2">
                  <h1 className="text-xl text-gray-500 mb-4">
                    Pay with:
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 justify-center">
                    {
                      paymentMethods?.map((payment, i) => {
                        return (
                          <button key={i} className="py-2 rounded-xl text-center text-white capitalize" onClick={() => handleBuy(payment?.code)}>
                            <img src={imgUrl(payment?.image)} alt="" style={{ maxWidth: '100%' }} />
                          </button>
                        )
                      })
                    }
                  </div>
                </div>
                :
                <button className="bg-main px-8 py-2 rounded-xl text-white" onClick={handleBuy}>
                  {
                    createOrderLoading ?
                      'Loading'
                      :
                      'Add free'
                  }
                </button>
            }

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
