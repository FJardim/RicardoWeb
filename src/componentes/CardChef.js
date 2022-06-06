import { BsPatchCheckFill } from "react-icons/bs";
import cheque from "../assets/cheque.png";
const BannerChef = ({ foto, name, description, recipes, plans, pack }) => {
  return (
    <div
      className=" w-full flex justify-center items-center rounded-lg"
      style={{ background: `url(${foto})`, backgroundSize: "100% 100%" }}
    >
      <div className="">
        <div className="flex justify-center items-center mt-6">
          <img
            src="https://5.imimg.com/data5/PD/LS/MY-21970292/women-s-chef-uniform-500x500.jpg"
            className="h-20 w-20 rounded-full items-center"
            alt=""
          />
        </div>

        <div className="text-center text-white font-sans">
          <div className="flex  justify-center text-center">
            <p className="text-xl text-center font-bold">{name}</p>
            <div className="mt-4 ml-3" />
            <img src={cheque} alt="" className="w-4 h-4 mt-2 mr-2" />
          </div>

          <p className="text-base">{description}</p>
          <div className="flex space-x-8 mb-6 mt-2">
            <p className="text-xs">{recipes}</p>
            <p className="text-xs">{plans}</p>
            <p className="text-xs">{pack}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerChef;
