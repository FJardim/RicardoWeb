
import React, { Fragment } from "react";

const Card = (props, name) => {
  console.log(props);
  return (
    <Fragment>
      <div className=" text-center h-14 rounded text-2xl px-2 py-2 mx-2 my-16 font-semibold bg-main shadow bg-teal-400	text-white">
        {props.saludo}
      </div>        <div className="text-white justify-end items-end">{name.name}</div>

    </Fragment>
  );
};

export default Card;