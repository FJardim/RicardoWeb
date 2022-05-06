import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import Chefs from '../assets/chef-hat.png';
import { BsPaypal } from "react-icons/bs";
import { SiAmazonaws } from "react-icons/si";

const ProductInfo = () => {
    const ingredients = [
        { id: 1, name: '3 cups rice.' },
        { id: 2, name: '1 tablespoon ground cinnamon or cinnamon splinter.' },
        { id: 3, name: '1 lirer od milk.' },
        { id: 4, name: '1 can co ndenses milk.' },
        { id: 5, name: 'Half a teaspoon of cloves.' },
        { id: 6, name: 'Sugar to taste.' },
    ];

    return (

        <div className="md:w-1/2 px-8">
            <div className='flex items-center text-3xl justify-between'>
                <h1 className='font-bold text-2xl'>Plan CocoNout</h1>
                <div className='flex space-x-4'>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><AiOutlineCheck className="text-green-700" /></button>
                    <button className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn" ><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
                    <IoHeartOutline className='text-teal-400 w-10 h-10' />
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
                        <p className="w-1/2 text-teal-400 underline">60-90 days</p>
                    </div>
                    <div className='flex py-2 '>
                        <p className="w-1/2">Ingredients:</p>
                        <p className="w-1/2 text-black">6</p>
                    </div>

                </div>
                <div className='m-2 '>
                    <p className="w-1/2 mb-4">Pucharse in:</p>
                    <button
                        className="flex justify-center items-center mb-4 font-bold text-center p-2 w-40 h-10 bg-blue-700 hover:bg-blue-500 rounded-xl text-white">
                        <BsPaypal className="text-white" />
                        Paypal
                    </button>
                    <button
                        className="flex justify-center items-center mb-4 font-bold text-center p-2 w-40 h-10 bg-white hover:bg-white-100 rounded-xl text-black">
                        <SiAmazonaws className=" text-black" />
                        Amazonaws
                    </button>
                    <button
                        className="flex justify-center items-center mb-4 font-bold text-center p-2 w-40 h-10 bg-blue-700 hover:bg-blue-500 rounded-xl text-white">
                        <BsPaypal className="text-white" />
                        Paypal
                    </button>
                    <button
                        className="flex justify-center items-center mb-4 font-bold text-center p-2 w-40 h-10 bg-white hover:bg-white-100 rounded-xl text-black">
                        <SiAmazonaws className=" text-black" />
                        Amazonaws
                    </button>

                </div>
            </div>
            <div className="flex grid grid-cols-2 gap-4 items-center m-4 p-4 bg-white rounded-md mt-10">
                <div className="text-main text-3xl font-semibold">
                    <div className='md:w-56 flex-shrink-0'>
                        <p className='text-teal-400'>$36.23</p>
                        <p className='text-gray-400 text-sm'>$48.56</p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button
                        className="bg-teal-400 items-center px-4 py-4 rounded-xl text-white font-bold hover:bg-teal-700">
                        + Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;