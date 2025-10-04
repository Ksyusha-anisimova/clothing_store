import React from 'react';
import Header from '../Header/Header';
import '../../../public/index.css';
import Navigation from "../Navigation/Navigation";
import Hero from '../Hero/Hero';
import BestSellers from "../BestSellers/BestSellers";
import Collection from "../Collection/Collection";
import Modweek from "../Modiweek/Modiweek";
import Follow from '../Follow/Follow';
import Footer from '../Footer/Footer';
export default function App(){
    return(
        <>
            <Header/>
            <Navigation/>
            <Hero/>
            <BestSellers title="Best Sellers" />
            <Collection title="Collection"/>
            {/*<Cards title="Collection" />*/}
            <Modweek title="Modweek"/>
            <Follow title="Follow us @modimal"/>
            <Footer/>
            <div className="main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rem rerum sapiente veritatis.</div>
        </>
    )
}