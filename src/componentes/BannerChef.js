import { BsStarFill } from "react-icons/bs";
import cheque from "../assets/cheque.png";
import { Link } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";

const BannerChef = ({ seller }) => {
  return (
    <div
      className="md:h-96 flex justify-center items-center"
      style={{ backgroundImage: `url(${imgUrl(seller?.banner)})`, backgroundSize: "100% 100%" }}
    >
      <div className="h-full w-full" style={{ background: "rgba(0,0,0, .5)" }}>
        <Link to={`/sellers/${seller?.slug}/blog`}>
          <div className="flex justify-center items-center p-6">
            <img src={imgUrl(seller?.logo)}
              className="md:h-52 md:w-52 w-20 h-20 rounded-full items-center" alt="" />
          </div>
        </Link>
        <div className="text-center text-white font-sans">
          <div className="flex justify-center text-center">
            <p className="md:text-4xl text-center font-bold text-ellipsis">{(seller?.name)}</p>
            <img src={cheque} alt="" className="md:mt-4 md:ml-3 m-1 text-main w-5 h-5" />
          </div>

          <p className="md:text-2xl">{(seller?.shortDescription)}</p>
          <div className="flex space-x-4 justify-center items-center md:mt-6 mb-6 text-yellow-300	">
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
