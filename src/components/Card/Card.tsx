import React from 'react';
import './Card.css';

export type CardProps={
    img:string;
    favorite?:string;
    title?:string;
    description?:string;
    price?:string;
    colors?: string[];
    ratio?: string;
    fit?: 'contain' | 'cover';
}

export default function Card({
                                 img,
                                 favorite,
                                 title,
                                 description,
                                 colors =[],
                                 price,
                                 ratio='4 / 5',
                                 fit='contain',

}:CardProps){
    return (
        <>

            <div className="card" style={{
                aspectRatio: ratio,
                backgroundImage: `url(${img})`,
                backgroundSize: fit,
            }}>
                <div className="card_button">
                    <img src={favorite} alt=""/>
                </div>


                <div className="card-data">

                    <div className="card-data__description">

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

                    </div>


                    <div className="car_price">
                        <span>{price}</span>
                    </div>

                </div>

            </div>

        </>
    )
}
