import React from 'react';

import style from './Card.module.css';


const Card = (props) => {

    const {
        title,
        imgSrc,
        desc,
        topics
    } = props;

    return (
        <div className={style.card}>
            <div className={style.card_img}>
                <img src={imgSrc} alt="first-of-post" />
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
    );
}

export default Card;
