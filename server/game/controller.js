const express = require('express');
const { Game, Player} = require('./model');

var game = new Game();

const app = express.Router();


app.get("/", function(req, res){
    res.send(game);
})
app.post('Players', (req,res)=>{
    const player = new Player(req.body.name);
    game.players.push(player);
    res.send(player);
})


moduel.exports = app;