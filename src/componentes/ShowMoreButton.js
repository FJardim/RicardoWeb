import { useState } from "react";

const ShowMoreButton = ({ buttonText, content, onClickButton }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="block underline text-gray-300 text-lg cursor-pointer hover:text-main"
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
