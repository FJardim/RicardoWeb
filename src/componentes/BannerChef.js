import { BsStarFill, BsPatchCheckFill } from "react-icons/bs";
const BannerChef = ({ image }) => {
  return (
    <div
      className="h-96 flex justify-center items-center"
      style={{ background: `url(${image})`, backgroundSize: "100% 100%" }}
    >
      <div>
        <div className="flex justify-center items-center">
          <img src="https://5.imimg.com/data5/PD/LS/MY-21970292/women-s-chef-uniform-500x500.jpg"
            className="h-40 w-40 rounded-full items-center" />
        </div>

        <div className="text-center text-white font-sans">
          <div className="flex  justify-center text-center">
            <p className="text-4xl text-center font-bold">Anya Taylor</p>
            <BsPatchCheckFill className="mt-4 ml-3  text-teal-400	" />
          </div>

          <p className="text-4xl">Chef, Nutrition Specialist.</p>
          <div className="flex space-x-4 justify-center items-center mt-6 text-yellow-300	">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerChef;
