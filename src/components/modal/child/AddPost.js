import React from 'react';

import '../../Theme.css';


const Addpost = () => {
    return (
        <div className="text_light">
            <label htmlFor="uploadImagePost" className="imageupload_label">
                <input type="file" id="uploadImagePost" />
                <div className="imageupload_section">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102">
                        <line id="Line_5" data-name="Line 5" x2="0.043" transform="translate(63.75 34)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <rect id="Rectangle_9" data-name="Rectangle 9" width="68" height="68" rx="3" transform="translate(17 17)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <path id="Path_8" data-name="Path 8" d="M4,30.177l17-17c3.945-3.8,8.805-3.8,12.75,0L55,34.427" transform="translate(13 33.573)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        <path id="Path_9" data-name="Path 9" d="M14,19.427l4.25-4.25c3.945-3.8,8.805-3.8,12.75,0l8.5,8.5" transform="translate(45.5 40.073)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    </svg>
                    <p>click to upload file</p>
                </div>
            </label>
            <input type="text" placeholder='post title' className="form_input" />
            <input type="text" placeholder='post topics' className="form_input" />
            <textarea placeholder='post description' className="form_input" rows="10"></textarea>
            <button className="btn_blue">
                <span>Create post</span>
            </button>
        </div>
    );
}

export default Addpost;
