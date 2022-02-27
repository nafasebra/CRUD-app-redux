import React, { useState } from 'react'

import './Theme.css';
import './Popup.css';


function Popup() {
  const [showPopup] = useState(false);


  return (
    <div className={showPopup ? "popup_container show" : "popup_container"}>
        <div className='popup_icon'>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <p className='popup_message'>Post is deleted!</p>
        <button className='btn_icon'>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    </div>
  )
}

export default Popup