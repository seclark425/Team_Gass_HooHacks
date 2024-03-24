class Resturaunt implements ListItem {
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

    isValid(): boolean {
        return 
    }
}