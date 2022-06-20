import { useState } from "react";

const ShowMoreButton = ({ buttonText, content, onClickButton }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button
        type="button"
        className=" px-2 py-2 rounded-xl block text-white font-bold bg-main-light"
        onClick={(e) => {
          setShowDetails((oldShow) => !oldShow);
          onClickButton?.(e);
        }}
      >
        {buttonText}
      </button>
      {showDetails && <div>{content}</div>}
    </div>
  );
};

export default ShowMoreButton;
