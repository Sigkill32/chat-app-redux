import React from "react";

const CloseIcon = ({ onHandleClose }) => {
  return (
    <div className="close-icon" onClick={onHandleClose}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.707.293a.999.999 0 0 0-1.414 0L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7l5.293-5.293a.999.999 0 0 0 0-1.414"
          fill="#FFF"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default CloseIcon;
