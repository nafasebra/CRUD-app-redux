import React from 'react';

import '../../Theme.css';


const Addpost = () => {

    return (
        <div className="text_light">
            <label htmlFor="uploadImagePost" className="imageupload_label">
                <input type="file" id="uploadImagePost" />
                <div className="imageupload_section">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
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
