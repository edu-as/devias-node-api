// node api Devias
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");

//rotas
app.use("/api", require("./src/routes"));

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