class Boardgame {
    constructor(players: Number, gameLength: Number, gameComplexity: Number) {
        this.length = gameLength;
        this.numPlayers = players;
        this.complexity = gameComplexity;
    }
    function setNumPlayers(players: Number) {
    this.numPlayers = players;
}

function setLength(gameLength: Number) {
    this.length = gameLength;
}

function setComplexity(gameComplexity: Number) {
    this.complexity = gameComplexity;
}
}