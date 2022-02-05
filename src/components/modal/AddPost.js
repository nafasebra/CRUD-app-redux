import React from 'react';

import theme from './../Theme.module.css';


const Addpost = () => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder='post title' className={theme.form_input} />
                <input type="text" placeholder='post title' className={theme.form_input} />
                <input type="text" placeholder='post title' className={theme.form_input} />
                <input type="text" placeholder='post title' className={theme.form_input} />
                <input type="text" placeholder='post title' className={theme.form_input} />
                <input type="text" placeholder='post title' className={theme.form_input} />
            </form>
        </div>
    );
}

export default Addpost;
