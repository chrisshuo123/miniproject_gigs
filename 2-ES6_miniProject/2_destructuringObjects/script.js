const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};

const { name, club, address: {city} } = player;

// and if we want to console.log it, the output is "name lives in city"
console.log(`${name} lives in ${city}`);