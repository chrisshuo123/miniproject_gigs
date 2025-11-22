// Diberikan object user dengan properti nama, email, dan nomorTelepon. Gunakan destructuring object untuk mengambil nilai email dan nomorTelepon ke variabel dengan nama yang sama.

// Dalam bentuk Object Literal
//const user = {nama, email, nomorTelepon};
const user = {
    nama: "Budi",
    email: "budi@example.com",
    nomorTelepon: "08123456789"
};

// (Opsional) Contoh jika dalam bentuk Array
const user2 = [
    "Budi",
    "budi@example.com",
    "08123456789"
];

// Destructuring Object:
const {email, nomorTelepon} = user;
console.log(`Nama: ${user.nama}, Email: ${email}, No Telp: ${nomorTelepon}`);

// Destructuring array: Ngambil Email, No telp saja
let [,ambilEmail,ambilTelp] = user2;
console.log(`${ambilEmail} ${ambilTelp}`);
