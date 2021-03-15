//this is database, lets pretend :)
const store = require('./store/data.json');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3500;

const apiId = 'd46a7bb1641978e4380affe0ff8b4067';

const random = (array) => {
    const randomNumber = Math.floor(Math.random() * ((array.length - 1) + 1));
    return array[randomNumber];
};

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (request, response) => {
    response.send('<h1>Server for Great Leader App!</h1>');
});

app.get('/quotes', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //i try to simulate delay on heavy loaded server 
    setTimeout(() => {
        response.json(random(store)); 
    }, 1000);
});

app.get('/weather/:city', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //i try to simulate delay on heavy loaded server  
    setTimeout(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(request.params.city)}&appid=${apiId}&lang=en&units=metric`)
            .then(response => response.json())
            .then(data => response.json(data))
    }, 2000);
});