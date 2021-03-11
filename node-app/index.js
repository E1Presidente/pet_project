//this is database, lets pretend :)
const store = require('./store/data.json');
const express = require('express');
const { request, response } = require('express');

const app = express();
const port = 3500;

//open weather fetch
const cityName = 'Pyongyang';
const apiId = 'd46a7bb1641978e4380affe0ff8b4067';

const weatherApi = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiId}&lang=en&units=metric`)
}; 

const random = (array) => {
    const randomNumber = Math.floor(Math.random() * ((array.length - 1) + 1));
    return array[randomNumber];
};

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (request, response) => {
    response.send('<h1>Server for Great Leader App!</h1>')
});

app.get('/quotes', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //imitating delay 
    setTimeout(() => {
        response.json(random(store)); 
    }, 1000);
});

app.get('/weather/:city', (request, response) => {
    console.log(request.params.city);
});