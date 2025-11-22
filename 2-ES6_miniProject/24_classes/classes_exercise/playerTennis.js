import { Player } from './Player.mjs';

class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country);
        this.age = age;
    }

    makeProfile(name = 'Rafael', age = 34) {
        return console.log(`${name} is ${age} years old and knows how to play Tennis`);
    }
}

let soccerPlayer = new Player();
soccerPlayer.makeProfile('Messi', 'Argentina');

let tennisPlayer = new TennisPlayer();
tennisPlayer.makeProfile('Rafael Nalar', 34);