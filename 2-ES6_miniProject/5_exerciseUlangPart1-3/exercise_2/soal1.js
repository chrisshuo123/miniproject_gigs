/**
 * Diberikan data mahasiswa dalam array of objects. Lakukan:
 * - Destructuring array untuk mengambil mahasiswa pertama
 * - Destructuring object untuk mengambil nama dan nilai
 * - Buat object baru dengan enhanced object literals yang berisi properti nama, nilai, dan status (lulus jika nilai >= 75)
 */

const mahasiswa = [
    {nama: 'Andi', nilai: 85},
    { nama: "Budi", nilai: 70 },
    { nama: "Citra", nilai: 90 }
];

const [mhsPertama, mhsKedua, mhsKetiga] = mahasiswa;
const {nama, nilai} = mhsPertama;

const hasil = {
    nama,
    nilai,
    // status() {
    //     if(nilai > 75) {
    //         'Lulus';
    //     } else {
    //         'Tidak lulus';
    //     }
    // } Pertanyaan: Kenapa tidak bisa return yang if seperti ini?
    status: nilai >= 75 ? 'Lulus' : 'Tidak Lulus'
};

//console.log(`Nama: ${nama}, Nilai: ${nilai}, Status: ${objMahasiswa.status}`);
console.log(hasil);