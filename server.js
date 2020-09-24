// node api Rocketseat
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");

const Product = mongoose.model("Product");

//primeira rota
app.get("/", (req, res) => {
    Product.create({
        title: "React Natice",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"
    });

    return res.send('Hello Wecome to Devias-node-api developed by Duzão');
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