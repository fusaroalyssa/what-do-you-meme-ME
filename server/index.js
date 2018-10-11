const express = require('express');
const game = require('./game/controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/game', game);

app.listen(3000);