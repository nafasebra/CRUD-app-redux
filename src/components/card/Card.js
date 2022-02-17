import React from 'react';

import style from './Card.module.css';
import theme from './../Theme.module.css';


const Card = (props) => {

    const { title, imgSrc, desc, topics } = props;

    return (
        <div className={style.card_item}>
            <div className={style.card}>
                <div className={style.card_header}>
                    <div className={style.card_icons}>
                        <button className={theme.btn_icon}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button className={theme.btn_icon}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    </div>
                    <div className={style.card_img}>
                        <img src={imgSrc} alt="first-of-post" />
                    </div>
                </div>
                <div className={style.card_body}>
                    <h3 className={style.card_title}>{title}</h3>
                    <p className={style.card_desc}>{desc}</p>
                    <div className={style.card_topics}>
                        {
                            topics.map((item, index) => <div key={index} className={style.card_topic}>{item}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
