import clsx from "clsx";

const CategorySectionCard = ({ className, img, name }) => {
    return (
        <div
            className={clsx(`
                flex items-center justify-center
                relative 
                w-full
                rounded-md
                transition transform hover:-translate-y-1
                hover:drop-shadow-2xl
                duration-300
                cursor-pointer
                bg-cover
                py-10
            `, className)}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className='rounded-md absolute bg-black h-full w-full opacity-30' >
            </div>
            <div className="relative text-white text-center text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >
                {name}
            </div>
        </div>

    );
}

export default CategorySectionCard;