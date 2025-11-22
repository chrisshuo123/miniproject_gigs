// Diberikan object buku dengan properti judul, penulis, dan tahunTerbit. Gunakan destructuring object untuk mengambil semua properti, lalu tampilkan dengan template literals dalam format:
// "Buku [judul] ditulis oleh [penulis] dan diterbitkan tahun [tahunTerbit]."

// Destructuring Object
const buku = {
    judul: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    tahunTerbit: 2005
};

// Destructuring Object
const { judul, penulis, tahunTerbit } = buku;

// Template Literal
console.log(`Buku ${judul} ditulis oleh ${penulis} dan diterbitkan tahun ${tahunTerbit}`);