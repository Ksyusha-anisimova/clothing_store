import React from 'react';
import './Navigation.css';
import logo from '../../../public/images/Logo.png';
import search from '../../../public/images/search.png';
import profile from '../../../public/images/profile.png';
import favorite from '../../../public/images/favorite.png';
import shopping_bag from '../../../public/images/shopping_bag.png'

export default function Navigation(){
    return(
        <>
            <div className="navigation">

                <div className="navigation_logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="navigation_list">
                    <div className="navigation_category">Collection</div>
                    <div className="navigation_category">New In</div>
                    <div className="navigation_category">Modiweek</div>
                    <div className="navigation_category">Plus Size</div>
                    <div className="navigation_category">Sustainability</div>
                </div>

                <div className="navigation_icons">
                    <div className="nav_icon">
                        <button>
                            <img src={search} alt=""/>
                        </button>
                    </div>
                    <div className="nav_icon">
                        <button>
                            <img src={profile} alt=""/>
                        </button>
                    </div>
                    <div className="nav_icon">
                        <button>
                            <img src={favorite} alt=""/>
                        </button>
                    </div>
                    <div className="nav_icon">
                        <button>
                            <img src={shopping_bag} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
