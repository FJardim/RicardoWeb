
import React, { Fragment } from "react";

const Card = (props) => {
  return (
    <Fragment>
      <div className=" text-center h-14 rounded text-2xl px-2 py-2 mx-8 my-8 font-semibold bg-main shadow bg-teal-400	text-white">
        {props.saludo}
      </div>
    </Fragment>
  );
};

export default Card;