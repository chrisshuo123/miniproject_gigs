let names = ['Chris', 'Coding Freak', 'Shuo'];
console.log(names);
// It shows the whole array

let [firstName] = ['Chris', 'Coding Freak', 'Shuo'];
console.log(firstName);
// It shows the first name

// How about the middle name and the last name?
let [firstName1, middleName, lastName] = ['Chris', 'Coding Freak', 'Shuo'];
console.log(`${middleName} ${lastName}`);

// Next Example: we refine the lastName
let [firstName2, middleName2, lastName2] = ['Chris', 'Coding Freak', 'Shuo'];
lastName2 = 'Wild'
console.log(`${middleName2} ${lastName2}`);