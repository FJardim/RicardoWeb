import AppLogo from "../assets/drafts.png";
import { BsBookmark } from "react-icons/bs";
import Matches from "./Matches";
import womenchef from "../assets/womenchef.jpg";
import CestaCompras from "../assets/Img-button/cesta-de-la-compra.png";
import BolsaCompras from "../assets/Img-button/bolsa-de-la-compra.png";
import Reloj from "../assets/clock.png";
import { IoArrowRedoOutline } from "react-icons/io5";
import ButtonCart from "./ButtonCart";

const CardRecipes = ({ texto, price, foto, bolsaIng, cestaIng, timePre, title, nameSellers, hideButtons, hideCart = false, hideClock, hideBag }) => {

  return (
    <div className="bg-white w-full mb-6 rounded-xl overflow-hidden">
      <div
        className="h-64 w-74 relative"
        style={{ backgroundImage: `url(${foto})`, backgroundSize: "100% 100%" }}
      >
        <div className="relative h-full w-full bg-black bg-opacity-20 flex ">
          <div className="absolute left-0 top-1 w-full justify-center items-center flex">
            <img
              src={AppLogo}
              className="h-10 w-10 opacity-60 rounded-full"
              alt="AppLogo"
            />
          </div>
          <div className="absolute flex left-1 top-1 bg-main-dark rounded-lg opacity-70">

            <p className="text-white h-6 w-15 ml-1 ">{price}</p>
          </div>
          <div className="absolute flex z-10 top-3 right-3 justify-end text-white">
            {!hideBag && (
              <div className="flex mr-2">

                <img src={BolsaCompras} className="h-5 w-5 text-white m-auto" alt="BolsaCompras" />
                <p className="text-white h-5 w-15 ml-1">{bolsaIng}</p>
              </div>
            )}
            <div className="flex ">
              <img src={CestaCompras} className="h-5 w-5 m-auto" alt="CestaCompras" />
              <p className="text-white h-5 w-5 ml-1">{cestaIng}</p>
            </div>

            {!hideClock && (
              <div className="flex ">

                <img src={Reloj} className="h-5 w-5 m-auto" alt="CestaCompras" />
                <p className="text-white h-5 w-5 ml-1">{timePre}</p>
              </div>
            )}
          </div>
          <h1 className="m-auto text-2xl text-white font-semibold">{title}</h1>
          <div className="absolute w-full bottom-0 bg-black bg-opacity-30 ">
            <h1 className="ml-4 text-white font-semibold">{texto}</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className=" flex text-bold">

                <img className="rounded-full h-8 w-8 m-1" src={womenchef} alt="" />
                <h1 className="p-1 text-white">{nameSellers}</h1>
              </div>
              <div className="flex justify-end text-white ">
                <div className="flex items-center space-x-2">
                  {/* <IoArrowRedoOutline className="h-6 w-6" /> */}
                  <div className="flex items-center">
                    <BsBookmark />
                    <p className="text-white h-5 w-5 m-1 mr-4">8.7K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {!hideButtons && (
          <div className="p-2">
            <Matches />
          </div>
        )}
        {!hideCart && (
          <div className="flex justify-center">
            <ButtonCart />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardRecipes;
