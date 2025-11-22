// 1 - for of Loop incomes array
let incomes = [62000, 67000, 75000];
let total = 0;

for(income of incomes) {
	console.log(income); // here we console log each of the income array
	total += income; // Accumulate the income total
}

// 2 - Char iterate
let fullName = "Chris Shuo Coding Freak";

for (const char of fullName) {
	console.log(char);
}