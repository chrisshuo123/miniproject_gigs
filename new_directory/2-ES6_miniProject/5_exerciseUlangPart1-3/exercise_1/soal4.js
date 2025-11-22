// Buat object kalkulator menggunakan enhanced object literals dengan:
/**
 * Properti angka1 dan angka2
 * Method jumlah yang mengembalikan penjumlahan angka1 dan angka2
 * Gunakan shorthand method definition
 */

const angka1 = 100;
const angka2 = 60;

const kalkulator = {
    angka1,
    angka2,
    jumlah() {
        return this.angka1 + this.angka2;
    }
};

console.log(kalkulator.jumlah());