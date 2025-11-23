import React from 'react';
import Card, { CardProps } from '../Card/Card';
import './BestSellers.css';

type BestSellersProps={
    title:string;
}
export default function BestSellers({title}:BestSellersProps) {
    const [items, setItems] = React.useState<CardProps[]>([]);

    React.useEffect(()=>{
        async function loadData(){
            const response = await fetch('/api/bestSellers');
            const bestSellers = await response.json();
            setItems(bestSellers);
        }
        loadData();
    },[]);
    return (
        <>
            <div className="cards">
                <span className="cards_title">{title}</span>
                <div className="cards_gallery">
                    {items.map((card, index) => (
                        <Card key={index} {...card}/>
                    ))}
                </div>
            </div>

        </>
    )
}