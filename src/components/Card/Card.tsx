import React from 'react';
import './Card.css';

export type CardProps={
    img:string;
    favorite?:string;
    title?:string;
    description?:string;
    price?:string;
    colors?: string[];
}

export default function Card({img,favorite,title,description,colors =[],price}:CardProps){
    return (
        <>
            <div className="card">
                <div className="card_button">
                    <img src={favorite} alt=""/>
                </div>
                <div className="card_img">
                    <img src={img} alt=""/>
                </div>
                <div className="card_title">
                    <span>{title}</span>
                </div>
                <div className="card_description">
                    <span>{description}</span>
                </div>

                <ul className="card_colors" aria-label="Доступные цвета">
                    {colors.map((color, index) => (
                        <li key={index} className="color_dot" style={{backgroundColor: color}}/>
                    ))}
                </ul>

                <div className="car_price">
                    <span>{price}</span>
                </div>
            </div>

        </>
    )
}
