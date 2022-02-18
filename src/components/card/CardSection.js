import React from 'react';

import Card from './Card';

import posts from '../../data/posts';

import layout from './../Layout.module.css'
import './Card.css'


const CardSection = () => {
    return (
        <div className={layout.container}>
            <h3 className="head_text">Added Posts...</h3>
            <div className="card_section">
                {
                    posts.map((item, index) => <Card key={index} imgSrc={item.imageSrc} title={item.title} desc={item.description} topics={item.topics} />)
                }
            </div>
        </div>
    );
}

export default CardSection;
