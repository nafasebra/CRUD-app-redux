import React from 'react';

import style from './Card.module.css'
import layout from './../Layout.module.css'

import Card from './Card';

import posts from '../../data/posts';


const CardSection = () => {
    return (
        <div className={layout.container}>
            <h3 className={style.head_text}>Added Posts...</h3>
            <div className={style.card_section}>
                {
                    posts.map((item, index) => <Card key={index} imgSrc={item.imageSrc} title={item.title} desc={item.description} topics={item.topics} />)
                }
            </div>
        </div>
    );
}

export default CardSection;
