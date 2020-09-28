// node api Rocketseat
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");


//rotas
app.use("/api", require("./src/routes"));

app.listen(3000);


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