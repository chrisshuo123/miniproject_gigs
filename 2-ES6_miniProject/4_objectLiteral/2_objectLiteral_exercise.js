// In this challenge, we’ll going to combine with Template Literal, Obj. Literal, and Obj. Destructuring:

// const newAddress = {
//     city: address.city,
//     state: address.state,
//     country: address.country
// };

// On the end goal, all we want to do is to console.log the new City, the new State,, and the Country with it.

function addressMaker(address) {
    // First: we destructure the objects
    const {city, state} = address;

    // And destructure using destructuring arrays:
    const newAddress = {
        city,
        state,
        country: 'United States'
    };

    // Then, we give output using template literal:
    console.log(`City: ${city}, State: ${state}, Country: ${newAddress.country}`);
}

// Then here, we call the function and return object literal
addressMaker({city: 'Austin', state: 'Texas'});