class BoardgameList {

    contents: Array<Boardgame>;
    numOfEntries: number;
    type: String;

    constructor(type: String) {
        this.contents = [];
        this.numOfEntries = 0;
        this.type = type;
    }

    getContents(): Array<Boardgame> {
        return this.contents;
    }

    size() {
        return this.numOfEntries;
    }

    add(newEntry: Boardgame) {
        this.getContents()[this.numOfEntries] = newEntry;
        this.numOfEntries++;
    }

    remove(entry: Boardgame): boolean {
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

    find(entry: Boardgame): number {
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i] == entry) {
                return i;
            }
        }
        return -1;
    }

    private getValidArr(players: number, length: number) {
        let validArr: Boardgame[] = [];
        let count = 0;
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i].getNumPlayers() == players, length && this.contents[i].getLength() == length) {
                validArr[count] = this.contents[i];
                count++;
            }
        }
        return validArr;
    }

    private chooseRandom(arr: Array<Boardgame>) {
        let index = this.getRandomInt(0, this.numOfEntries);
        return arr[index];
    }

    private getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    getFinalRandom(players: number, length: number): Boardgame {
        let validArr = this.getValidArr(players, length);
        return this.chooseRandom(validArr);
    }
}

class ResturauntList {

    contents: Array<Resturaunt>;
    numOfEntries: number;
    type: String;

    constructor(type: String) {
        this.contents = [];
        this.numOfEntries = 0;
        this.type = type;
    }

    getContents(): Array<Resturaunt> {
        return this.contents;
    }

    size() {
        return this.numOfEntries;
    }

    add(newEntry: Resturaunt) {
        this.getContents()[this.numOfEntries] = newEntry;
        this.numOfEntries++;
    }

    remove(entry: Resturaunt): Boolean {
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

    find(entry: Resturaunt): number {
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i] == entry) {
                return i;
            }
        }
        return -1;
    }


    private getValidArr(price: number, type: string) {
        let validArr: Resturaunt[] = [];
        let count = 0;
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i].getPrice() == price && this.contents[i].getType() == type) {
                validArr[count] = this.contents[i];
                count++;
            }
        }
        return validArr;
    }

    chooseRandom(arr: Array<Resturaunt>) {
        let index = this.getRandomInt(0, this.numOfEntries);
        return arr[index];
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    getFinalRandom(price: number, type: string): Resturaunt {
        let validArr = this.getValidArr(price, type);
        return this.chooseRandom(validArr);
    }
}


class Boardgame {

    length: number;
    numPlayers: number;
    name: string;

    constructor(players, gameLength, gameName) {
        this.length = gameLength;
        this.numPlayers = players;
        this.name = gameName;
    }
    setNumPlayers(players) {
        this.numPlayers = players;
    }

    getNumPlayers(): number {
        return this.numPlayers;
    }

    setLength(gameLength) {
        this.length = gameLength;
    }

    getLength(): number {
        return this.length;
    }

    setName(gameName) {
        this.name = gameName;
    }

    getName(): string {
        return this.name;
    }
    
}

class Clothing {

    type: string;

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
    type: string; //type of food, such as mediterranian, asian, etc.
    price: number; //rating of price out of 3, with 1 being the least expensive
    name: string;

    constructor(name, type, price) {
        this.type = type;
        this.price = price;
        this.name = name;
    }

    getType(): string {
        return this.type;
    }

    setType(type: string) {
        this.type = type;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number) {
        this.price = price;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}

const addGameBtn = document.getElementById("add-game");
const addResBtn = document.querySelector(".resturauntoption button");
const addOutfitBtn = document.querySelector("add-outfit")
addGameBtn.addEventListener


// const gameBtn = document.getElementById("gamebtn");
// const resBtn = document.getElementById("resbtn");
// const otftBtn = document.getElementById("otftbtn");
// let gameList = new List<Boardgame>("boardgame");
// let resList = new List<Resturaunt>("resturaunt");
// while (document.getElementById('bgdiv') != null) {
//     gameBtn.addEventListener('click', () => {
//         const players = document.getElementById("players").value;
//         gameList.getValid(players, length);
// })
// }



// while (resBtn != null) {
//     resBtn.addEventListener('click', () => {
//         resList.choose();
//     })
// }
