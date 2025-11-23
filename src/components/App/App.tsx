import React from 'react';
import Header from '../Header/Header';
import '../../style/index.css';
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
            <Hero  img="/images/hero.png" button='New In' title='Elegance in simplicity, Earth’s harmony'/>
            <BestSellers title="Best Sellers" />
            <Collection title="Collection"/>
            <Modiweek title="Modiweek"/>
            <Hero  img="/images/cotton.jpg" button='Sustainability' title="Stylish sustainability in clothing promotes eco-friendly choices for a greater future"/>
            <Follow title="Follow us @modimal"/>
            <Footer/>
        </>
    )
}