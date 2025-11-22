// Diberikan array buah berisi "Apel", "Mangga", dan "Jeruk". Gunakan destructuring array untuk mengambil nilai "Mangga" ke variabel buahKedua.

const buah = ["Apel", "Mangga", "Jeruk"];

// destructuring array
const [, buahKedua] = buah;
console.log(buahKedua);