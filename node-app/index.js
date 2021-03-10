const store = require('./store/data.json');
const express = require('express');

const app = express();

const port = 3500;

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
    console.log(random(store));
});