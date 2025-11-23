import React from 'react';
import './Footer.css';

type footerProps={
    title: string;
    list:string[];
}
export default function Footer(){
    const [items,setItems]=React.useState<footerProps[]>([]);
    React.useEffect(()=>{
        async function loadData(){
            const response= await fetch('/api/footer');
            const footer = await response.json();
            setItems(footer);
        }
        loadData();
    })
    return(
        <>
            <div className="footer_main">
                <div className="left">
                    <span className="left_title">Join our club, get 15% off for your Birthday</span>
                    <input type="Email" className="left_input" placeholder="Enter Your Email Address"/>

                    <span className="left_frame">By Submittng your email, you agree to receive advertising emails from Modimal.</span>
                </div>

                <div className="right">
                    <div className="right_text_box">
                        {items.map((item,index)=>(
                            <div key={index} className="right_column">
                                <span className="right_title">{item.title}</span>
                                <ul>
                                    {item.list.map((text,i)=>(
                                        <li key={i}>{text}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}