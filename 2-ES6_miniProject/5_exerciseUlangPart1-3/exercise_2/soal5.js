/**
 * Diberikan nested array dan object. Lakukan:
 * 1. Destructuring array untuk mengambil tim pertama
 * 2. Destructuring object tim untuk mengambil nama dan anggota
 * 3. Destructuring array anggota untuk mengambil ketua dan anggota pertama
 * 4. Buat object struktur tim dengan enhanced object literals
 */

const timList = [
    {
        namaTim: "Pengembang Web",
        anggota: ["Ayu", "Bambang", "Chandra", "Dewi"]
    }
];

// 1. Destructuring array untuk mengambil tim pertama
const [timPertama] = timList;
// 2. Destructuring object tim untuk mengambil nama dan anggota
const { namaTim, anggota } = timPertama;
// 3. Destructuring array anggota untuk mengambil ketua dan anggota pertama
const [ketua, ...anggotaLain] = anggota;
// 4. Buat object struktur tim dengan enhanced object literals
const tim = {
    namaTim,
    ketua,
    anggotaLain,
    totalAnggota: anggota.length,
    getInfo() {
        return `Nama Tim: ${this.namaTim}, Ketua: ${this.ketua}, Total Anggota: ${this.totalAnggota}, Anggota Lain: ${this.anggotaLain}`;
    }
}

console.log(tim.getInfo());