

class List<T extends ListItem> {

    contents: Array<T>;
    numOfEntries: number;
    type: String;

    constructor(type: String) {
        this.contents = [];
        this.numOfEntries = 0;
        this.type = type;
    }

    getContents(): Array<T> {
        return this.contents;
    }

    size() {
        return this.numOfEntries;
    }

    add(newEntry: T) {
        this.getContents()[this.numOfEntries] = newEntry;
        this.numOfEntries++;
    }

    remove(entry: T): Boolean {
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

    find(entry: T): number {
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i] == entry) {
                return i;
            }
        }
        return -1;
    }

    

    getValid() {
        let validArr: T[] = [];
        let j = 0;
        for (let i = 0; i < this.numOfEntries; i++) {
            if (this.contents[i].isValid()) {
                validArr[j] = this.contents[i];
                j++;
            }
        }
        return validArr;
    }

    choose() {
        let index = this.getRandomInt(0, this.numOfEntries);
        return this.contents[index];
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }
}
