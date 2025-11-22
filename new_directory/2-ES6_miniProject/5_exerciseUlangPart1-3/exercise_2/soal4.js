/**
 * Diberikan array transaksi dengan item produk. Lakukan:
 * 1. Destructuring array untuk mengambil transaksi pertama
 * 2. Destructuring object untuk mengambil items dan total
 * 3. Destructuring array items untuk mengambil produk pertama
 * Buat object ringkasan transaksi
 */

const transaksi = [
    {
        id: 1,
        items: ["Laptop", "Mouse", "Keyboard"],
        total: 12500000
    }
];

// 1. Destructuring array untuk mengambil transaksi pertama
const [transaksiPertama] = transaksi;
// 2. Destructuring object untuk mengambil items dan total
const {items, total} = transaksiPertama;

// 3. Destructuring array items untuk mengambil produk pertama
const [produkPertama] = items;

// Peroleh nama Produk pertama, total transaksi, dan jumlah itemnya (jumlah pakai value.length)
const ringkasanTransaksi = {
    produkPertama,
    total,
    jumlahItem: items.length,
    getInfo() {
        return `Item: ${this.produkPertama}, Total: Rp.${this.total}, Jumlah Item: ${this.jumlahItem}`;
    }
};

console.log(ringkasanTransaksi.getInfo());