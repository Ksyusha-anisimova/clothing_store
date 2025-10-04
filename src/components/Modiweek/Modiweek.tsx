import React from 'react';
import Card, {CardProps} from '../Card/Card';


type ModiweekProps ={
    title:string;
}

export default function Modweek({title}:ModiweekProps){
  const [items, setItems] = React.useState<CardProps[]>([]);
  React.useEffect(()=>{
      async function loadData(){
          const response = await fetch('/api/modweek');
          const modweek = await response.json();
          setItems(modweek);
      }
      loadData();
  },[]);

  return(
      <>
        <div className="modweek">
            <span className="modweek_title">
                {title}
            </span>

            <div className="mode_gallery">
                {items.map((item,index)=>(
                    <Card key={index} {...item}/>
                ))}
            </div>
        </div>
      </>
  )
};
