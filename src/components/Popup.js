import React from "react";

import "./Theme.css";
import "./Popup.css";

function Popup(props) {
  const { show, setClose, text } = props;

  return (
    <div className={show ? "popup_container show" : "popup_container"}>
      <p className="popup_message"> {text} </p>
      <button onClick={() => setClose()} className="btn_icon">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default Popup;
