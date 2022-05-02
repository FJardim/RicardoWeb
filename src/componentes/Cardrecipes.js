const Cardrecipes = ({img, texto}) => {
    return (  
        <div
        className="-translate-y-6 flex justify-center items-center content-center rounded-lg  mt-12 ml-10 mr-10 w-52 h-32 "
        style={{ backgroundImage: `url(${img})` }}
      >
         
        <h1 className=" text-white font-semibold text-center text-xl">{texto}</h1>
      </div>
    )
}

export default Cardrecipes;