// node api Rocketseat
const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser:true }
);

//primeira rota
app.get('/', (req, res)=> {
    res.send('Hello Wecome to Devias-node-api developed by Duzão');
});

app.listen(3001);


/* CURSO NODE BALTA.IO

'use strict'

const http = require ('http');
const express = require('express');
const debug = require('debug')('deviasApiNode:serve');


const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();*/