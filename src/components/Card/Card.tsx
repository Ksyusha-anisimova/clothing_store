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

    const hasContent = Boolean(title || description || price || colors?.length);
    const hasButton = Boolean(favorite);
    const rows = hasButton
        ? hasContent
            ? "6fr 1fr 1fr"
            : "8fr"
        : hasContent
            ? "6fr 2fr"
            : "1fr";

    return (

        <>

            <div className="ui-card" style={{ gridTemplateRows: rows }}>


                <div className='card_img' style={{
                aspectRatio: ratio,
                backgroundImage: `url(${img})`,
                backgroundSize: fit,
            }}/>
                {favorite && (
                    <div className="card_button">
                        <img src={favorite} alt=""/>
                    </div>
                 )}


                {hasContent && (
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
                )}

            </div>

        </>
    )
}
