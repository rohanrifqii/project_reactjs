import { Link } from "react-router-dom";
import fotoArva from "../assets/Arva.jpeg";

function ProfilArva() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth bg-[#09090b] text-white font-sans tracking-tight relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#172554_0%,_#09090b_45%,_#050507_100%)]"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]"></div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="p-2 hover:bg-white/10 rounded-full transition-colors group"
              title="Back to Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400 group-hover:text-white transition-transform group-hover:-translate-x-0.5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            
            <div className="text-sm font-black tracking-[0.4em] uppercase">
              Arva's Profile<span className="text-sky-400">.</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#identity" className="hover:text-white transition-colors">
              Identity
            </a>
            <a href="#corefocus" className="hover:text-white transition-colors">
              Core Focus
            </a>
            <a href="#vision" className="hover:text-white transition-colors">
              Vision
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 relative z-10 pt-32 pb-12 px-6 md:px-12">
        <div className="w-full md:w-[45%] flex flex-col items-center md:items-start md:sticky md:top-32">
          <div className="relative group mb-10 w-full max-w-md">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-3xl opacity-50"></div>

            <div className="relative p-3 bg-[#14161b]/80 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl">
              <img
                src={fotoArva}
                alt="Rafif Arvazean"
                className="w-full h-auto aspect-[3/4] rounded-2xl object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
              />

              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Learning Mode
                </span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left w-full space-y-4">
            <h1 className="text-5xl lg:text-7xl font-extralight text-white tracking-tighter leading-none uppercase">
              Rafif
              <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-sky-400">
                Arvazean
              </span>
            </h1>
            <p className="text-xs md:text-sm text-slate-500 font-bold tracking-[0.4em] uppercase">
              Information Technology Student
            </p>
            <p className="text-sm md:text-base text-slate-300 italic leading-relaxed max-w-lg">
              "Rasa ingin tahu dalam spektrum tak terbatas."
            </p>
            <p className="text-[10px] font-black tracking-[0.35em] uppercase text-sky-400">
              / rafif-arvazean
            </p>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#about"
                className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all"
              >
                Explore
              </a>
              <a
                href="#identity"
                className="px-8 py-3 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-all"
              >
                Identity
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[55%] space-y-16 py-4">
          <section id="about" className="space-y-8 scroll-mt-32">
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-black tracking-[0.5em] text-white uppercase italic">
                About Me
              </h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">
                Bio
              </span>
              <p className="text-sm leading-relaxed text-slate-400 text-justify font-medium">
                Saya adalah mahasiswa yang memiliki ketertarikan kuat pada
                bidang matematis sebagai fondasi berpikir logis dan analitis.
                Minat saya berkembang ke dunia cybersecurity, khususnya dalam
                memahami bagaimana sistem dapat diamankan maupun diuji
                kerentanannya secara terstruktur. Selain itu, saya juga
                mendalami data science untuk mengolah dan mengekstrak insight
                dari data secara efisien. Ketertarikan saya terhadap bahasa
                mesin dan backend mendorong saya memahami cara kerja sistem dari
                level rendah hingga implementasi aplikasi. Saya berorientasi
                pada pengembangan skill praktis sekaligus pemahaman konsep
                mendalam, dengan tujuan menjadi profesional yang mampu membangun
                dan mengamankan sistem secara optimal.
              </p>
            </div>
          </section>

          <section id="identity" className="space-y-8 scroll-mt-32">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">
              Identity
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  Nama
                </span>
                <p className="mt-3 text-lg font-semibold text-white">
                  Rafif Arvazean
                </p>
              </div>
              <div className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  NIM
                </span>
                <p className="mt-3 text-lg font-semibold text-white">
                  253140700111018
                </p>
              </div>
              <div className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  Kelas
                </span>
                <p className="mt-3 text-lg font-semibold text-white">T2D</p>
              </div>
              <div className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  Jurusan
                </span>
                <p className="mt-3 text-lg font-semibold text-white">
                  Teknologi Informasi
                </p>
              </div>
              <div className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl sm:col-span-2">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  Domisili
                </span>
                <p className="mt-3 text-lg font-semibold text-white">Kebumen</p>
              </div>
            </div>
          </section>

          <section id="corefocus" className="space-y-8 scroll-mt-32">
            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">
              Core Focus
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-black uppercase tracking-[0.2em] text-[9px]">
              <div className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                Mathematical Thinking
              </div>
              <div className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                Cybersecurity
              </div>
              <div className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                Data Science
              </div>
              <div className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                Backend Systems
              </div>
              <div className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl flex items-center gap-3 sm:col-span-2">
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                Low-Level Logic & Machine Language
              </div>
            </div>
          </section>

          <section
            id="vision"
            className="relative p-10 rounded-[2.5rem] overflow-hidden group border border-white/5 bg-white/[0.02] scroll-mt-32"
          >
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest italic">
                Vision
              </span>
              <p className="text-3xl lg:text-5xl font-extralight leading-[1.1] text-white tracking-tighter">
                "Rasa ingin tahu dalam{" "}
                <span className="italic font-serif">spektrum tak terbatas</span>
                ."
              </p>
              <p className="text-sm leading-relaxed text-slate-400 max-w-2xl">
                Saya ingin terus berkembang menjadi pribadi yang mampu memahami
                sistem secara mendalam, membangun solusi yang efektif, dan
                menjaga keamanannya dengan pendekatan yang terstruktur serta
                analitis.
              </p>
            </div>
          </section>

          <footer className="flex justify-between items-end pt-12 border-t border-white/5 opacity-40">
            <div className="text-[9px] font-black tracking-[0.3em] uppercase">
              Location / Kebumen, ID
            </div>
            <div className="text-[9px] font-black tracking-[0.3em] uppercase italic">
              Arva � 2026
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ProfilArva;
