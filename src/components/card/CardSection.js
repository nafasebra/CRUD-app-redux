import React from 'react';

import style from './Card.module.css'
import Card from './Card';
import posts from '../../data/posts';


const CardSection = () => {
    return (
        <div className={style.card_section}>
            {
                posts.map((item, index) => <Card key={index} title={item.title} desc={item.description} topics={item.topics}/>)
            }
        </div>
    );
}

export default CardSection;
