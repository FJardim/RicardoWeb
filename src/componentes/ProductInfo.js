import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Chefs from '../assets/chef-hat.png';
import Amazon from "../assets/Img-button/amazon-fresh.jpg";
import Wallmart from "../assets/Img-button/wallmart-logo.jpg";
import Instacart from "../assets/Img-button/instacart.jpg";
import Paypal from "../assets/Img-button/paypal-3.png";
import ButtonImage from "./ButtonImage";

const ProductInfo = ({ name, ingredients }) => {


    return (

        <div className="md:w-1/2 px-8">
            <div className='flex items-center text-3xl justify-between'>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <div className='flex space-x-4'>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><AiOutlineCheck className="text-green-700" /></button>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
                    <IoHeartOutline className='text-main w-10 h-10' />
                </div>

            </div>

            <div className="flex">
                <AiFillStar className="mt-2 text-yellow-300" />
                <AiFillStar className="mt-2 text-yellow-300" />
                <AiFillStar className="mt-2 text-yellow-300" />
                <AiFillStar className="mt-2 text-yellow-300" />
                <AiOutlineStar className="mt-2 text-gray-300" />
                <p className='text-gray-300 text-xs m-2 underline'>(1 customer review)</p>
            </div>
            <div className='py-4'>
                {ingredients.map(ingredient => <div key={ingredient.id}>{ingredient.name}</div>)}
            </div>

            <div className='py-6 grid grid-cols-2 gap-4 text-xl text-gray-400'>
                <div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">Level</p>
                        <div className='flex '>
                            <img className="w-5 h-5" src={Chefs} alt="chefs" />
                            <img className="ml-2 w-5 h-5" src={Chefs} alt="chefs" />
                            <img className="ml-2 w-5 h-5" src={Chefs} alt="chefs" />
                            <img className="ml-2 w-5 h-5" src={Chefs} alt="chefs" />
                        </div>
                    </div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">Category:</p>
                        <p className="w-1/2 text-black">Fitness</p>
                    </div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">Time:</p>
                        <p className="w-1/2 text-main underline">60-90 days</p>
                    </div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">Ingredients:</p>
                        <p className="w-1/2 text-black">6</p>
                    </div>

                </div>
                <div className='m-2 '>
                    <p className="w-1/2 mb-4">Pucharse in:</p>
                    <ButtonImage image={Instacart} />
                    <ButtonImage image={Amazon} />
                    <ButtonImage image={Wallmart} />
                    {/* //<ButtonImage image={Paypal} /> */}
                </div>
            </div>
            <div className="flex grid grid-cols-2 gap-4 items-center m-4 p-4 bg-white rounded-md mt-10">
                <div className="text-main text-3xl font-semibold">
                    <div className='md:w-56 flex-shrink-0'>
                        <p className='text-main'>$36.23</p>
                        <p className='text-gray-400 text-sm'>$48.56</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button
                        className="bg-main items-center px-4 py-4 rounded-xl text-white font-bold hover:bg-teal-700">
                        + Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;