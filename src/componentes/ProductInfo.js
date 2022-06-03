import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
// import { IoHeart } from "react-icons/io5";
// import Chefs from '../assets/chef-hat.png';
import Amazon from "../assets/Img-button/amazon-fresh.jpg";
import Wallmart from "../assets/Img-button/wallmart.jpeg";
import Instacart from "../assets/Img-button/instacart.jpg";
import Paypal from "../assets/Img-button/paypal-logo.png";
import ButtonImage from "./ButtonImage";
import Details from "./Details";
import { Link } from "react-router-dom";

const ProductInfo = ({
    name,
    ingredients,
    showPaypalButton = false,
    hideMarketButtons = false,
}) => {


    return (

        <div className="md:w-1/2 md:px-8">
            <div className='md:flex items-center text-3xl md:justify-between'>
                <h1 className='font-bold text-2xl md:ml-1 ml-2 md:block'>{name}</h1>
                <div className='md:flex space-x-4 md:m-2 md:m-auto mt-4 container flex justify-center '>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><AiOutlineCheck className="text-green-700" /></button>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
                    <IoHeartOutline className='text-main cursor-pointer w-10 h-10' />
                </div>
            </div>

            <div className="flex">
                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                <AiOutlineStar className="mt-2 text-gray-300 h-6 w-6" />
                <p className='text-gray-300 text-lg m-2 underline'>(1 customer review)</p>
            </div>
            <div className='bg-white rounded-lg py-4'>
                <div className="m-8 text-lg">
                    {ingredients.map(ingredient => <div key={ingredient.id}>{ingredient.name}</div>)}
                </div>
            </div>

            <div className='py-6 ml-2 grid grid-cols-2 gap-2 md:gap-12 text-xl text-gray-400'>
                <Details
                    level="Level"
                    categories="Categories"
                    fitness="Lunch"
                    time="Time"
                    days="60-90 days"
                    ingredients="Ingredients"
                    number="6"
                />
                <div className='md:m-2 '>
                    <p className="md:w-1/2 w-4/2 mb-4">Pucharse in:</p>

                    {!hideMarketButtons && <>
                        <ButtonImage image={Instacart} />
                        <ButtonImage image={Amazon} />
                        <ButtonImage image={Wallmart} />
                    </>}
                    {showPaypalButton && <Link to="/payment"><ButtonImage image={Paypal} /></Link>}
                </div>
            </div>
            <div className="flex grid grid-cols-2 gap-4 items-center md:m-4 p-4 bg-white rounded-md md:mt-10">
                <div className="text-main text-3xl font-semibold">
                    <div className='md:w-56 flex-shrink-0'>
                        <p className='text-main'>$36.23</p>
                        <p className='text-gray-400 text-sm'>$48.56</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button
                        className="bg-main items-center px-4 py-4 rounded-xl text-white font-bold bg-main-light">
                        + Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;