import React, { Fragment } from "react";

const Card = (props) => {
  return (
    <Fragment>
      <div className="flex justify-center text-center md:h-14 cursor-pointer rounded md:text-2xl md:px-2 py-2 mx-8 md:my-8 font-semibold shadow bg-main hover:bg-main-light	text-white">
        {props.saludo}
       </div>
    </Fragment>
  );
};

export default Card;
