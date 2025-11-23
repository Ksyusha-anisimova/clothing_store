import React from 'react';
import Card, {CardProps} from "../Card/Card";
import './Follow.css';

type followProps={
    title:string;
}

export default function Follow({title}:followProps){
    const [items,setItems] = React.useState<CardProps[]>([]);
    React.useEffect(()=>{
        async function loadDate(){
            const response = await fetch('/api/follow');
            const follow = await response.json();
            setItems(follow);
        }
        loadDate();
    });

    return(
        <>
            <div className="follow">
                <span className="follow_title">
                    {title}
                </span>

                <div className="follow_gallery">
                    {items.map((item,index)=>(
                        <Card key={index} {...item} fit='cover'/>
                    ))}
                </div>
            </div>
        </>
    )
}