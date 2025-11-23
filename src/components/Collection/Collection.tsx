import React from 'react';
import Card, { CardProps } from '../Card/Card';
import './Collection.css';

type CollectionProps={
    title:string;
}

export default function Collection({title}:CollectionProps){

    const [items,setItems] = React.useState<CardProps[]>([]);
    React.useEffect(()=>{
        async function loadData(){
            const response = await fetch('/api/collection');
            const data = await response.json();
            setItems(data);
        }
        loadData();
    },[])
    return(
        <>
            <div className="collection">
                <span className="collection_title">
                    {title}
                </span>

                <div className="collection_gallery">
                    {items.map((item,i)=>(
                        <Card key={i} {...item} fit='cover'/>
                    ))}

                </div>
            </div>
        </>
    )
}