class Clothing implements ListItem {

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