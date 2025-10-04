const express = require('express');
const path = require('path');
const app = express();

const PORT=8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));



const collection =[
    { img: "/images/pic4.png" },
    { img: "/images/pic3.png" },
    { img: "/images/pic2.png" },
    { img: "/images/pic1.png" }
];

const bestSellers=[
    {
        "img": "/images/photo1.png",
        "favorite": "/images/favorite.png",
        "title": "Tailored stretch",
        "description": "Turn it up pants",
        "price": "$180",
        "colors": ["#0C0C0C", "#7DC3EB", "#748C70"]
    },
    {
        "img": "/images/photo2.png",
        "favorite": "/images/favorite.png",
        "title": "Technical Silk",
        "description": "Make A Splash",
        "price": "$120",
        "colors": ["#909225", "#19418E", "#0C0C0C"]
    },
    {
        "img": "/images/photo3.png",
        "favorite": "/images/favorite.png",
        "title": "Cool Weave",
        "description": "Anywhere Dress",
        "price": "$210",
        "colors": ["#D0A5EA", "#909225", "#748C70"]
    }
];

const modweek=[
    {
        "img": "/images/photo1.png",
        "favorite": "/images/favorite.png",
        "description": "Anywhere Dress",
    },
    {
        "img": "/images/photo2.png",
        "favorite": "/images/favorite.png",
        "description": "Anywhere Dress",
    },
    {
        "img": "/images/photo3.png",
        "favorite": "/images/favorite.png",
        "description": "Anywhere Dress",
    },
    {
        "img": "/images/photo1.png",
        "favorite": "/images/favorite.png",
        "description": "Anywhere Dress",
    },
];

const follow=[
    {
        "img": "/images/photo1.png",
    },
    {
        "img": "/images/photo2.png",
    },
    {
        "img": "/images/photo3.png",
    },
];

const footer=[
    {
        "title":"About Modimal",
        "list":["Collection", "Sustainability", "Privacy Policy", "Support System", "Terms & Condition", "Copyright Notice"],
    },
    {
        "title":"Help & Support",
        "list":["Orders & Shipping","Returns & Refunds", "FAQs", "Contact Us"],
    },
    {
        "title":"Join Up",
        "list":["Modimal Club", "Careers", "Visit Us"],
    }
];
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.get('/api/collection',(req, res)=>{
    res.json(collection);
})

app.get('/api/bestSellers',(req, res)=>{
    res.json(bestSellers);
})

app.get('/api/modweek',(req, res)=>{
    res.json(modweek);
})

app.get('/api/follow',(req, res)=>{
    res.json(follow);
})

app.get('/api/footer',(req,res)=>{
    res.json(footer);
})
app.listen(PORT);