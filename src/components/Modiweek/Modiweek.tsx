import React from 'react';
import Card, {CardProps} from '../Card/Card';
import '/src/components/Modiweek/Modiweek.css';

type ModiweekProps ={
    title:string;
}

export default function Modiweek({title}:ModiweekProps){
  const [items, setItems] = React.useState<CardProps[]>([]);
  React.useEffect(()=>{
      async function loadData(){
          const response = await fetch('/api/modiweek');
          const modiweek = await response.json();
          setItems(modiweek);
      }
      loadData();
  },[]);

  return(
      <>
        <div className="modiweek">
            <span className="modiweek_title">
                {title}
            </span>

            <div className="modiweek_gallery">
                {items.map((item,index)=>(
                    <Card key={index} {...item}/>
                ))}
            </div>
        </div>
      </>
  )
};
