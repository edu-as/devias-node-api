const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('Hello Api-node-Duzao');
});

app.listen(3001);
