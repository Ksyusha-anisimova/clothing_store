import React from 'react';
import './Navigation.css';
import logo from '../../../public/images/Logo.png';
import search from '../../../public/images/search.png';
import profile from '../../../public/images/profile.png';
import favorite from '../../../public/images/favorite.png';
import shopping_bag from '../../../public/images/shopping_bag.png'
import Header from '../../../src/components/Header/Header';

import {useSelector, useDispatch} from "react-redux";
import {RootState} from '../../store/store';

export default function Navigation(){

    const isOPen = useSelector((state:RootState)=> state.isOpen);
    const dispatch = useDispatch();
    return(
        <>
            <div className="navMenu">

                <Header/>


            <div className={`nav ${isOPen ? 'open' : ''}`}>
                {/*    <div className='nav'>*/}
                <button
                        className="nav__burger-btn"
                        onClick={() => dispatch({type: "TOGGLE_MENU"})}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="nav__logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="nav__list">
                        <div className="nav--category">Collection</div>
                        <div className="nav--category">New In</div>
                        <div className="nav--category">Modiweek</div>
                        <div className="nav--category">Plus Size</div>
                        <div className="nav--category">Sustainability</div>
                    </div>

                    <div className="navIcon__list">
                        <div className="nav__icon">
                            <button>
                                <img src={search} alt=""/>
                            </button>
                        </div>
                        <div className="nav__icon">
                            <button>
                                <img src={profile} alt=""/>
                            </button>
                        </div>
                        <div className="nav__icon">
                            <button>
                                <img src={favorite} alt=""/>
                            </button>
                        </div>
                        <div className="nav__icon">
                            <button>
                                <img src={shopping_bag} alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
            )

            }
