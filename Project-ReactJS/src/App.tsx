import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfilRohan from './page/ProfilRohan';
import ProfilArva from './page/ProfilArva';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Project Based Task - ReactJS</h1><br />

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/rohan"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 text-center"
              >
                Profil Rohan
              </Link>
              <Link
                to="/arva"
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 text-center"
              >
                Profil Arva
              </Link>
            </div>
          </div>
        } />
        <Route path="/rohan" element={<ProfilRohan />} />
        <Route path="/arva" element={<ProfilArva />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
