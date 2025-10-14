import React from 'react';
import './Hero.css';

type heroProps={
    img:string;
}

export default function Hero({img}:heroProps){
    return(
        <>
            <div className="hero">

                <div className="hero_img" style={{backgroundImage:`url(${img}`}}>
                    <span className="hero_text">Elegance in simplicity, Earth’s harmony</span>
                    <button className="hero_button">new</button>
                </div>
            </div>
        </>
    )
}