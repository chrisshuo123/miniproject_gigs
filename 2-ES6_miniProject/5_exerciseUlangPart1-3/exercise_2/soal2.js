/**
 * Diberikan array yang berisi object produk dan array kategori. Lakukan:
 * 1. Destructuring array untuk mengambil produk pertama dan kategori pertama
 * 2. Destructuring object produk untuk mengambil nama dan harga
 * 3. Buat object ringkasan dengan enhanced object literals
 */

const produk = [{nama: "Laptop", harga: 10000000, stok: 5}];
const kategori = ["Elektronik", "Komputer"];

const [produkPertama] = produk;
const [kategoriPertama] = kategori;
const {nama, harga} = produkPertama;

const ringkasan = {
    namaProduk: nama,
    hargaProduk: harga,
    kategoriProduk: kategoriPertama,
    getInfo() {
        return `Nama Produk: ${this.namaProduk}, Harga: ${this.hargaProduk}, Kategori: ${this.kategoriProduk}`;
    }
};

console.log(ringkasan.getInfo());