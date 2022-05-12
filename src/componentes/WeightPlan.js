const WeightPlan = ({ img, logo, title, text }) => {
    return (

        <div className="flex relative h-80 w-96 bg-main rounded-md cursor-pointer mt-10 mr-5 ml-5 mb-10  bg-cover" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute bg-black opacity-40 rounded-md w-full h-full">
            </div>

            <div className="absolute flex justify-end h-20 w-20 right-2 mt-2">
                <img src={logo} alt="Logo" />
            </div>
            <div className="relative text-white text-center mt-36 text-4xl" style={{ textShadow: "0px 0px 3px #000000" }}>
                {title}
                <p className="text-white text-center text-sm m-4">{text}</p>
            </div>
        </div>

    );
}

export default WeightPlan;