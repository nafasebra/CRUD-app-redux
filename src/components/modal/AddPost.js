import React from 'react';

import theme from './../Theme.module.css';


const Addpost = () => {
    return (
        <div>
            <form action="">
                <input type="file" />
                <input type="text" placeholder='post title' className={theme.form_input} />
                <input type="text" placeholder='post topics' className={theme.form_input} />
                <textarea placeholder='post description' className={theme.form_input} rows="10"></textarea>
                <button className={theme.btn_blue}>
                    <span>Create post</span>
                </button>
            </form>
        </div>
    );
}

export default Addpost;
