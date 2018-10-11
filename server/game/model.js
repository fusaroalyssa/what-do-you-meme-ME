const pictures = [

];

const captions = [

];

class Game {
    constructor(){
        this.picture = "";
        this.players = [];
        this.playedCaptions = [
            {text: "I dont always ..." }
        ];
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.captions = [];
        this.score = 0;
    }
}

module.exports = {
    Player, Game
}