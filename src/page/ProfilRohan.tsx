import { Link } from "react-router-dom";
import fotoRohan from "../assets/Rohan.jpeg";

function ProfilRohan() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth bg-[#040814] text-white font-sans tracking-tight relative overflow-x-hidden">
      
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-15%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none z-0"></div>
      
      <div className="fixed top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full border border-blue-500/5 -rotate-12 pointer-events-none z-0"></div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#040814]/70 backdrop-blur-md">
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
              Rohan's Profile<span className="text-indigo-500">.</span>
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

            <div className="relative p-3 bg-[#16161a]/80 backdrop-blur-md rounded-3xl border border-white/5 shadow-2xl">
              <img
                src={fotoRohan}
                alt="Muhammad Rohan Rifqi"
                className="w-full h-auto aspect-[3/4] rounded-2xl object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
              />

              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-widest uppercase">
                  Available
                </span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left w-full space-y-4">
            <h1 className="text-5xl lg:text-7xl font-extralight text-white tracking-tighter leading-none uppercase">
              Muhammad
              <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-400">
                Rohan
              </span>{" "}
              Rifqi
            </h1>
            <p className="text-xs md:text-sm text-slate-500 font-bold tracking-[0.4em] uppercase">
              Technology Information Student
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
              <span className="block mb-3 text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                Bio & Goals
              </span>
              <p className="text-sm leading-relaxed text-slate-400 text-justify font-medium">
                Halo! Saya Rohan, mahasiswa <span className="text-white font-bold italic">Teknologi Informasi</span> yang memiliki antusiasme tinggi dalam mengelola siklus pengembangan perangkat lunak dan strategi digital. Saya menikmati proses belajar teknologi modern seperti ReactJS dan Tailwind CSS untuk menciptakan solusi yang tepat guna.
                Cita-cita saya adalah menjadi seorang <span className="text-white font-bold decoration-indigo-500">Project Manager IT</span> yang profesional. Saya percaya kesuksesan produk digital bergantung pada manajemen tim yang solid, komunikasi efektif, dan perencanaan strategi yang matang.
              </p>
            </div>
          </section>

          <section id="identity" className="space-y-8 scroll-mt-32">
            <span className="block mb-3 text-[10px] font-black text-indigo-400 uppercase tracking-widest">
              Identity
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  Nama
                </span>
                <p className="mt-3 text-lg font-semibold text-white">
                  Muhammad Rohan Rifqi
                </p>
              </div>
              <div className="p-5 border border-white/5 bg-white/[0.02] rounded-2xl">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  NIM
                </span>
                <p className="mt-3 text-lg font-semibold text-white">
                  253140701111059
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
                <p className="mt-3 text-lg font-semibold text-white">Banjarbaru</p>
              </div>
            </div>
          </section>

          <section id="corefocus" className="space-y-8 scroll-mt-32">
            <span className="block mb-3 text-[10px] font-black text-indigo-400 uppercase tracking-widest">
              Core Focus
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-black uppercase tracking-[0.2em] text-[9px]">
              {[
                "IT Project Management",
                "SDLC Strategy",
                "Team Collaboration",
                "Web Development",
                "Digital Strategy",
                "IT Network",
              ].map((item) => (
                <div
                  key={item}
                  className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section
            id="vision"
            className="relative p-10 rounded-[2.5rem] overflow-hidden group border border-white/5 bg-white/[0.02] scroll-mt-32"
          >
            <div className="relative z-10 space-y-4">
              <span className="block mb-3 text-[10px] font-black text-indigo-400 uppercase tracking-widest italic">
                Vision
              </span>
              <p className="text-3xl lg:text-5xl font-extralight leading-[1.1] text-white tracking-tighter">
                "Building bridges between{" "}
                <span className="italic font-serif">complex technology</span>{" "}
                and efficient business solutions."
              </p>
            </div>
          </section>

          <footer className="flex justify-between items-end pt-12 border-t border-white/5 opacity-40">
            <div className="text-[9px] font-black tracking-[0.3em] uppercase">
              Location / Banjarbaru, ID
            </div>
            <div className="text-[9px] font-black tracking-[0.3em] uppercase italic">
              Rohan © 2026
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default ProfilRohan;