import React from 'react';
// PENTING: Import foto dari folder assets
import fotoRohanAsli from './assets/Rohan.jpeg';

const ProfilRohan = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full flex flex-col items-center border border-slate-200">
        
        {/* Foto Profil */}
        <div className="relative">
          <img
            src={fotoRohanAsli} 
            alt="Foto Muhammad Rohan Rifqi"
            className="w-40 h-40 rounded-full object-cover mb-4 border-4 border-indigo-500 shadow-lg"
          />
          <div className="absolute bottom-4 right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
        </div>

        {/* Data Diri */}
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Muhammad Rohan Rifqi</h1>
        <p className="text-indigo-600 font-semibold mb-1 text-lg">Mahasiswa Teknologi Informasi</p>
        
        <div className="flex gap-3 mb-6 text-sm text-slate-500">
          <span className="bg-slate-100 px-3 py-1 rounded-full">Kelas: T2D</span>
          <span className="bg-slate-100 px-3 py-1 rounded-full">Domisili: Banjarbaru</span>
        </div>

        {/* Tentang Diri */}
        <div className="w-full text-justify text-slate-700 bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
          <h2 className="font-bold text-lg mb-3 text-indigo-900 flex items-center">
            <span className="mr-2">📝</span> Tentang Saya
          </h2>
          <p className="leading-relaxed text-sm">
            Halo! Perkenalkan, nama saya adalah Rohan Rifqi. Saat ini saya sedang menempuh pendidikan di bidang teknologi informasi karena saya memiliki ketertarikan yang sangat besar pada dunia pengembangan perangkat lunak, khususnya dalam ekosistem web modern. Saya sangat senang mempelajari hal-hal baru seperti ReactJS dan Tailwind CSS karena keduanya memungkinkan saya untuk membangun antarmuka yang interaktif dan estetis secara efisien. 
            <br/><br/>
            Selain fokus pada perkuliahan, saya juga sering menghabiskan waktu luang untuk mengeksplorasi berbagai framework baru dan mengikuti perkembangan tren teknologi terkini di komunitas open-source. Bagi saya, pemrograman bukan hanya sekadar menulis kode, melainkan sebuah cara untuk memecahkan masalah nyata dan memberikan solusi digital yang bermanfaat bagi banyak orang. Di masa depan, saya memiliki cita-cita untuk menjadi seorang Senior Full-stack Developer yang mampu menciptakan aplikasi berdampak luas. Saya percaya bahwa dengan kerja keras, kolaborasi tim yang solid melalui platform seperti GitHub, dan semangat belajar yang tiada henti, impian tersebut dapat tercapai dengan baik.
          </p>
        </div>

        <p className="mt-8 text-slate-400 text-xs italic">
          5. Project Based Task
        </p>
      </div>
    </div>
  );
};

export default ProfilRohan;