/**
 * Diberikan array yang berisi object produk dan array kategori. Lakukan:
 * 1. Destructuring array untuk mengambil produk pertama dan kategori pertama
 * 2. Destructuring object produk untuk mengambil nama dan harga
 * 3. Buat object ringkasan dengan enhanced object literals
 */

const produk = [{nama: "Laptop", harga: 10000000, stok: 5}];
const kategori = ["Elektronik", "Komputer"];

// Destructuring Array
const [produkPertama] = produk;
const [kategoriPertama] = kategori;

// Destructuring Object
const {nama, harga} = produkPertama;

// Buat object ringkasan dengan enhanced object literals
const ringkasan = {
    namaProduk: nama,
    harga,
    kategori: kategoriPertama,
    info() {
        return `${this.namaProduk} - Rp.${this.harga}`;
    }
}

console.log(ringkasan.info());