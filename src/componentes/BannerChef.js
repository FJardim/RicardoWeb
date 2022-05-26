import { BsStarFill, BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const BannerChef = ({ image }) => {
  return (

    <div
      className="md:h-96 flex justify-center items-center"
      style={{ background: `url(${image})`, backgroundSize: "100% 100%" }}
    >
      <div>
        <Link to={"/blogchef"}>
          <div className="md:flex justify-center items-center">
            <img src="https://5.imimg.com/data5/PD/LS/MY-21970292/women-s-chef-uniform-500x500.jpg"
              className="md:h-40 w-40 rounded-full items-center" alt="" />
          </div>
        </Link>
        <div className="text-center text-white font-sans">
          <div className="md:flex justify-center text-center">
            <p className="md:text-4xl text-center font-bold">Anya Taylor</p>
            <BsPatchCheckFill className="mt-4 ml-3  text-main" />
          </div>

          <p className="md:text-4xl">Chef, Nutrition Specialist.</p>
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
