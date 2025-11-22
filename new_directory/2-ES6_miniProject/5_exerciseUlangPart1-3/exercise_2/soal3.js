/**
 * Diberikan nested object karyawan. Lakukan:
 * 1. Destructuring object untuk mengambil nama dan departemen
 * 2. Destructuring array untuk mengambil manager dari departemen
 * 3. Buat object profil dengan enhanced object literals
 */

const karyawan = {
    nama: "Rina",
    usia: 28,
    departemen: {
        nama: "IT",
        manager: ["David", "Lisa", "Ahmad"]
    }
};

// 1. Destructuring object untuk mengambil nama dan departemen
// 2. Destructuring array untuk mengambil manager dari departemen
const {
    nama, departemen:{nama: namaDept, manager:[managerPertama]}
} = karyawan;

// 3. Buat object profil dengan enhanced object literals
const profil = {
    namaKaryawan: nama,
    departemen: namaDept,
    managerUtama: managerPertama,
    getInfo() {
        return `Nama: ${this.namaKaryawan}, Departemen: ${this.departemen}, Manager Inti: ${this.managerUtama}`;
    }
};

console.log(profil.getInfo());