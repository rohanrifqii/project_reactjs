import { Link } from 'react-router-dom';
import fotoRohan from '../assets/Rohan.jpeg';

function ProfilRohan() {
  return (
    /* PERUBAHAN DI SINI: Tambahkan h-screen, overflow-y-auto, dan scroll-smooth */
    <div className="h-screen overflow-y-auto scroll-smooth bg-[#0a0a0c] text-white font-sans tracking-tight relative">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1c1c21_0%,_#0a0a0c_100%)]"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]"></div>

      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-200 transition-colors hover:border-indigo-300/60 hover:bg-indigo-400/20 hover:text-white"
            >
              <span aria-hidden="true">&lt;-</span>
              <span>Kembali ke Home</span>
            </Link>
            <div className="text-sm font-black tracking-[0.4em] uppercase">
              Rohan's Profile<span className="text-indigo-500">.</span>
            </div>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#corefocus" className="hover:text-white transition-colors">Core Focus</a>
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
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
                <span className="text-[10px] font-black tracking-widest uppercase">Available</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left w-full space-y-4">
            <h1 className="text-5xl lg:text-7xl font-extralight text-white tracking-tighter leading-none uppercase">
              Muhammad<br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Rohan</span> Rifqi
            </h1>
            <p className="text-xs md:text-sm text-slate-500 font-bold tracking-[0.4em] uppercase">
              Technology Information Student
            </p>
            
            <div className="flex gap-4 pt-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all">
                GitHub
              </button>
              <button className="px-8 py-3 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-white/5 transition-all">
                Message
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[55%] space-y-16 py-4">
          <section id="about" className="space-y-8 scroll-mt-32">
            <div className="flex items-center gap-6">
              <h2 className="text-sm font-black tracking-[0.5em] text-white uppercase italic">About Me</h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-white/20 to-transparent"></div>   
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Bio</span>
                <p className="text-sm leading-relaxed text-slate-400 text-justify font-medium">
                  Halo! Saya Rohan, mahasiswa <span className="text-white font-bold italic">Teknologi Informasi</span> yang memiliki antusiasme tinggi dalam mengelola siklus pengembangan perangkat lunak dan strategi digital. Saya menikmati proses belajar teknologi modern seperti ReactJS dan Tailwind CSS untuk menciptakan solusi yang tepat guna.
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Goals</span><br />
                <p className="text-sm leading-relaxed text-slate-400 text-justify font-medium">
                  Cita-cita saya adalah menjadi seorang <span className="text-white font-bold underline decoration-indigo-500 underline-offset-8">Project Manager IT</span> yang profesional. Saya percaya kesuksesan produk digital bergantung pada manajemen tim yang solid, komunikasi efektif, dan perencanaan strategi yang matang.
                </p>
              </div>
            </div>
          </section>

          <section id="corefocus" className="space-y-8 scroll-mt-32">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Core Focus</span>
            <div className="grid grid-cols-2 gap-4 font-black uppercase tracking-[0.2em] text-[9px]">
              {['IT Project Management', 'SDLC Strategy', 'Team Collaboration', 'Digital Strategy'].map((item) => (
                <div key={item} className="p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-xl flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section id="vision" className="relative p-10 rounded-[2.5rem] overflow-hidden group border border-white/5 bg-white/[0.02] scroll-mt-32">
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest italic">Vision</span>
              <p className="text-3xl lg:text-5xl font-extralight leading-[1.1] text-white tracking-tighter">
                "Building bridges between <span className="italic font-serif">complex technology</span> and efficient business solutions."
              </p>
            </div>
          </section>
          
          <footer id="contact" className="flex justify-between items-end pt-12 border-t border-white/5 opacity-30 scroll-mt-32">
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
};

export default ProfilRohan;
