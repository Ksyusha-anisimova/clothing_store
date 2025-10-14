import React from 'react';
import Header from '../Header/Header';
import '../../../public/index.css';
import Navigation from "../Navigation/Navigation";
import Hero from '../Hero/Hero';
import BestSellers from "../BestSellers/BestSellers";
import Collection from "../Collection/Collection";
import Modiweek from "../Modiweek/Modiweek";
import Follow from '../Follow/Follow';
import Footer from '../Footer/Footer';
export default function App(){
    return(
        <>
            <Header/>
            <Navigation/>
            <Hero  img="/images/hero.png"/>
            <BestSellers title="Best Sellers" />
            <Collection title="Collection"/>
            <Modiweek title="Modiweek"/>
            <Hero  img="/images/cotton.jpg"/>
            <Follow title="Follow us @modimal"/>
            <Footer/>
        </>
    )
}