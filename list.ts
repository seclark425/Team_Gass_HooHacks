class List<Type> {
    constructor(type: String) {
        this.contents = [];
        this.numOfEntries = 0;
        this.type = type;
    }

    getContents() {
        return this.contents;
    }
    
    add(newEntry: Type) {
    contents[numOfEntries] = newEntry;
    this.numOfEntries++;
    }

    remove(entry: Type): Boolean {
    let index = find(entry);
    if (index > -1) {
        for (let i = index; i < this.numOfEntries - 1; i++) {
            contents[index] = contents[index + 1];
        }
        this.numOfEntries++;
        return true;
    }
    return false;
}

function find(entry: Type): Number {
    for (let i = 0; i < this.numOfEntries; i++) {
        if (contents[i] == entry) {
            return i;
        }
    }
    return -1;
}

function getValid() {
    let validArr = [];
    let j = 0;
    for (let i = 0; i < numOfEntries; i++) {
        if (contents[i].isValid()) {
            validArr[j] = contents[i];
            j++;
        }
    }
    return validArr;
}

function choose() {
    let index = getRandomInt(0, numOfEntries);
    return contents[index];
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
}
