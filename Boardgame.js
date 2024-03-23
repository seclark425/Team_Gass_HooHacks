class Boardgame {
    constructor(players, gameLength, gameComplexity) {
        this.length = gameLength;
        this.numPlayers = players;
        this.complexity = gameComplexity;
    }
    setNumPlayers(players) {
        this.numPlayers = players;
    }

    setLength(gameLength) {
        this.length = gameLength;
    }

    setComplexity(gameComplexity) {
        this.complexity = gameComplexity;
    }
}