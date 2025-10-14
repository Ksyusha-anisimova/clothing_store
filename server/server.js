const express = require('express');
const path = require('path');
const app = express();

const PORT=8080;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

const modiweek = require('./data/modiweek');
const collection = require('./data/collection')
const bestSellers = require('./data/bestSellers');
const follow = require('./data/follow');
const footer = require('./data/footer');


app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.get('/api/collection',(req, res)=>{
    res.json(collection);
})

app.get('/api/bestSellers',(req, res)=>{
    res.json(bestSellers);
})

app.get('/api/modiweek',(req, res)=>{
    res.json(modiweek);
})

app.get('/api/follow',(req, res)=>{
    res.json(follow);
})

app.get('/api/footer',(req,res)=>{
    res.json(footer);
})
app.listen(PORT);