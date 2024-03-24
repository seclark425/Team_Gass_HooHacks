class Boardgame {
    constructor(players, gameLength, gameComplexity) {
        this.length = gameLength;
        this.numPlayers = players;
        this.complexity = gameComplexity;
        this.name = gameName
    }
    setNumPlayers(players) {
        this.numPlayers = players;
    }

    setLength(gameLength) {
        this.length = gameLength;
    }

function setComplexity(gameComplexity: Number) {
    this.complexity = gameComplexity;
}
}