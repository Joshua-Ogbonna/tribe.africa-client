import React from "react";

import "./EmptyOption.css"

interface IEmptyOption {
  message: string;
  buttonText: string;
  buttonAction: () => void;
}

const EmptyOption: React.FC<IEmptyOption> = ({
  message,
  buttonText,
  buttonAction,
}) => {
  return (
    <div className="empty__option">
      <i className="fa-solid fa-spinner"></i>
      <p>{message}</p>
      <button onClick={buttonAction}> {buttonText} </button>
    </div>
  );
};

export default EmptyOption;
