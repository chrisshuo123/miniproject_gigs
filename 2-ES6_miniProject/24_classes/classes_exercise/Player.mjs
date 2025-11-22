export class Player {
    constructor(name, country) {
            this.name = name;
            this.country = country;
    }

    makeProfile(name = "Messi", country = "Argentina") {
        return console.log(`${name} was born in ${country}`);
    }
}