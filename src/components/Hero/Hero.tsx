import React from 'react';
import './Hero.css';

type heroProps={
    img:string;
    title:string;
    button:string;
}

export default function Hero({img, title, button}:heroProps){
    return(
        <>
            <div className="hero">

                <div className="hero_img" style={{backgroundImage:`url(${img}`}}>
                    <span className="hero_text">{title}</span>
                    <button className="hero_button">{button}</button>
                </div>
            </div>
        </>
    )
}