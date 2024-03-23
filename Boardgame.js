class Boardgame {
    constructor(players: Number, gameLength: Number, gameComplexity: Number, gameName: String) {
        this.length = gameLength;
        this.numPlayers = players;
        this.complexity = gameComplexity;
        this.name = gameName
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

function setName(gameName: String) {
    this.name = gameName;
}


}