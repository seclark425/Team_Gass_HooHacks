class BoardgameList {

    constructor() {
        this.contents = [];
        this.numOfEntries = 0;
    }

    getContents() {
        return this.contents;
    }

    size() {
        return this.numOfEntries;
    }

    add(newEntry) {
        this.getContents()[this.numOfEntries] = newEntry;
        this.numOfEntries++;
    }

    remove(entry) {
        let index = this.find(entry);
        if (index > -1) {
            for (let i = index; i < this.numOfEntries - 1; i++) {
                this.contents[index] = this.contents[index + 1];
            }
            this.numOfEntries++;
            return true;
        }
        return false;
    }

    find(entry) {
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i] == entry) {
                return i;
            }
        }
        return -1;
    }

    getValidArr(players, length) {
        let validArr = [];
        let count = 0;
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i].getNumPlayers() >= players && this.contents[i].getLength() <= length) {
                validArr[count] = this.contents[i];
                count++;
            }
        }
        return validArr;
    }

    chooseRandom(arr) {
        let index = this.getRandomInt(0, this.numOfEntries);
        return arr[index];
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    getFinalRandom(players, length) {
        let validArr = this.getValidArr(players, length);
        return this.chooseRandom(validArr);
    }
}

class ResturauntList {

    contents;
    numOfEntries;

    constructor() {
        this.contents = [];
        this.numOfEntries = 0;
    }

    getContents() {
        return this.contents;
    }

    size() {
        return this.numOfEntries;
    }

    add(newEntry) {
        this.getContents()[this.numOfEntries] = newEntry;
        this.numOfEntries++;
    }

    remove(entry) {
        let index = this.find(entry);
        if (index > -1) {
            for (let i = index; i < this.numOfEntries - 1; i++) {
                this.contents[index] = this.contents[index + 1];
            }
            this.numOfEntries++;
            return true;
        }
        return false;
    }

    find(entry) {
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i] == entry) {
                return i;
            }
        }
        return -1;
    }


    getValidArr(price, type) {
        let validArr = [];
        let count = 0;
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i].getPrice() <= price) {
                validArr[count] = this.contents[i];
                count++;
            }
        }
        return validArr;
    }

    chooseRandom(arr) {
        let index = this.getRandomInt(0, this.numOfEntries);
        return arr[index];
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    getFinalRandom(price, type) {
        let validArr = this.getValidArr(price, type);
        return this.chooseRandom(validArr);
    }
}


class Boardgame {

    constructor(players, gameLength, gameName) {
        this.length = gameLength;
        this.numPlayers = players;
        this.name = gameName;
    }
    setNumPlayers(players) {
        this.numPlayers = players;
    }

    getNumPlayers() {
        return this.numPlayers;
    }

    setLength(gameLength) {
        this.length = gameLength;
    }

    getLength() {
        return this.length;
    }

    setName(gameName) {
        this.name = gameName;
    }

    getName() {
        return this.name;
    }

}

class Clothing {

    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }
}

class Resturaunt {

    constructor(name, type, price) {
        this.type = type;
        this.price = price; //scale of 1-3, 1 being the cheapest
        this.name = name;
    }

    getType() {
        return this.type;
    }

    setType(type) {
        this.type = type;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

const gameList = new BoardgameList();
const resList = new ResturauntList();


const addGameBtn = document.getElementById("add-game");
const addResBtn = document.querySelector(".resturauntoption button");
const addOutfitBtn = document.getElementById("add-outfit")

const chooseGameBtn = document.querySelector(".bgdiv button");

function addGame() {
    // let players = document.getElementById("players").value;
    // let length = document.getElementById("hours").value;
    // let name = document.getElementById("name").value;
    // let error = document.getElementById("add-error");
    // if ((name == null || name == "") && (length == null || length == "") && (players == null || players == "")) {
    //     document.getElementById("add-error").style.display = "block";
    // }
    // else {
    //     error.style.display = "none";
    //     let game = new Boardgame(players, length, name);
    //     gameList.add(game);
    //     document.write(game.getName());
    // }
    
}

function chooseGame() {
    let players = document.getElementById("players").value;
    let length = document.getElementById("hours").value;
    let error = document.getElementById("choose-error");
    let wingspan = document.getElementById("wingspan");
    if ((players == null || players == "") && (length == null || length == "")) {
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        wingspan.style.display = "block";
        let game = gameList.getFinalRandom(players, length);
        document.write(game.getName());
    }
}

function chooseRes() {
    let budget = document.getElementById("budget").value;
    let error = document.getElementById("choose-error");
    let oliveGardern = document.getElementById("olive-garden");
    if ((budget == null || budget == "")) {
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        oliveGardern.style.display = "block";
    }
}