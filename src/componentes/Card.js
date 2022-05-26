
import React, { Fragment } from "react";

const Card = (props) => {
  return (
    <Fragment>
      <div className=" text-center md:h-14 rounded md:text-2xl md:px-2 py-2 mx-8 md:my-8 font-semibold shadow bg-main	text-white">
        {props.saludo}
      </div>
    </Fragment>
  );
};

export default Card;