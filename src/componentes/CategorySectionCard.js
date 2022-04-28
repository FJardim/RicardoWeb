const CategorySectionCard = (props, img) => {
    return (
        <div className="relative h-70 w-[900px] rounded-md transition transform hover:-translate-y-1 hover:drop-shadow-2xl duration-300 cursor-pointer" style={{ backgroundImage: `url(${img})` }}>
            <div className='rounded-md absolute bg-black h-full w-full opacity-30' >
            </div>
            <div className="relative text-white text-center py-10 text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >
                {props.name}

            </div>
        </div>

    );
}

export default CategorySectionCard;