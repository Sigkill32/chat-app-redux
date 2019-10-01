import React from "react";

const EmailButton = ({ onHandleEmailButton }) => {
  return (
    <div className="email-button">
      <button onClick={onHandleEmailButton}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 72 72"
          >
            <path
              className="c-Illo__pathFill c-Illo__pathFillSecondary"
              d="M41.5 38l-28-22 37 17.1L48.1 51 37.4 40.8l4.1-2.8zm20.4 18.5c-.5-.3-.6-.9-.3-1.4.3-.5.9-.6 1.4-.3l3.6 2.1c.5.3.6.9.3 1.4-.3.5-.9.6-1.4.3l-3.6-2.1zm-4.5 3.3l1.8 3.6c.6 1.2-1.2 2.1-1.8.9l-1.8-3.6c-.6-1.2 1.2-2.1 1.8-.9zM64.5 48h4c1.3 0 1.3 2 0 2h-4c-1.3 0-1.3-2 0-2z"
            ></path>
            <path
              className="c-Illo__pathFill c-Illo__pathFillPrimary"
              d="M37.3 42.1L28 47.5c-2.3 1.4-5.3.5-6.4-2l-14-32c-.2-.3-.2-.6-.1-.9 0-.1.1-.1.1-.2.2-.3.6-.5 1.1-.4l51.6 11.7c2.4.5 2.9 3.8.7 4.9l-9.5 5L49.1 51c0 .1 0 .1-.1.2-.1.4-.4.7-.7.8-.3.1-.7 0-.9-.3l-10.1-9.6zm1.8-1l6 5.8-3.3-7.3c0-.1-2.7 1.5-2.7 1.5zm8.5 6.5l1.9-13.9-32.2-15.4 25.6 19.1c.1.1.2.2.3.4l4.4 9.8zM50.5 32l9.6-5.1c.5-.3.4-1-.2-1.2L17 16l33.5 16zM10.9 16.1l12.5 28.7c.6 1.3 2.2 1.8 3.5 1L40.3 38 10.9 16.1z"
            ></path>
          </svg>
        </div>
        <div>
          <h1>Email</h1>
          <p>No Time to wait around? We usually respond within few hours</p>
        </div>
      </button>
    </div>
  );
};

export default EmailButton;
