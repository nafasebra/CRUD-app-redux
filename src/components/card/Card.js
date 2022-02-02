import React from 'react';

import style from './Card.module.css';


const Card = () => {
    return (
        <div className={style.card}>
            <div className={style.card_img}>
                <img src="https://i.ytimg.com/vi/CTCVaslgLCY/hqdefault.jpg" alt="first-of-post" />
            </div>
            <div className={style.card_body}>
                <h3 className={style.card_title}>title 1</h3>
                <p className={style.card_desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolor!
                </p>
                {/* <div className={style.card_buttons}></div> */}
            </div>
        </div>
    );
}

export default Card;
