import React from 'react'

import './Theme.css';
import '.Popup.css';


function Popup() {
  return (
    <div className='popup_container'>
        <div className='popup_icon'>
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <p className='popup_message'>Post is deleted!</p>

        <button className='popup_icon'></button>
    </div>
  )
}

export default Popup