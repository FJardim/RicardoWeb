import AppLogo from "../assets/drafts.png";
import { BsCalendarPlus, BsBookmark, BsFillShareFill } from "react-icons/bs";

const CardRecipes = ({ texto, parrafo, foto, title }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${foto})`, backgroundSize: "100% 100%" }}
        className="h-40"
      >
        <div className="relative h-full w-full bg-black bg-opacity-20 flex">
          <div className="absolute left-0 top-1 w-full justify-center items-center flex">
            <img src={AppLogo} className="h-10 w-10" />
          </div>
          <div className="absolute z-10 top-3 right-3 flex justify-end space-x-4 text-white">
            <BsFillShareFill />
            <BsCalendarPlus />
          </div>
          <h1 className="m-auto text-2xl text-white font-semibold">{title}</h1>
        </div>
      </div>
      <div className="p-2">
        <h1 className="text-green-400">{texto}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            {parrafo.length > 15 ? `${parrafo.slice(0, 15)}...` : parrafo}
          </div>
          <div className="flex justify-end space-x-4">
            <BsFillShareFill className="text-green-400" />
            <BsCalendarPlus className="text-green-400" />
            <div className="text-green-400">
              <BsBookmark className="m-auto" />
              <p>8.7K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRecipes;
