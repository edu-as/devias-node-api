'use strict'
const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('Hello Wecome to Devias-node-api developed by Duzão');
});

app.listen(3001);
