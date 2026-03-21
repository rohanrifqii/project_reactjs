import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfilRohan from './ProfilRohan'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
            <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Project Based Task - ReactJS</h1><br />
            
            <Link 
              to="/rohan" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Profil Rohan
            </Link>
          </div>
        } />
        <Route path="/rohan" element={<ProfilRohan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;