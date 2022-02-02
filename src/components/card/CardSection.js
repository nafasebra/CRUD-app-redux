import React from 'react';

import style from './Card.module.css'

import Card from './Card';


const CardSection = () => {
    return (
        <div className={style.card_section}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardSection;
