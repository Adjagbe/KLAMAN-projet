import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './PAGES/Home';
import Klaman from './PAGES/Klaman';
import Portofolio from './PAGES/Portofolio';
import Header from './SCREENS/Header';
import Register from './PAGES/Register';

function App() {
  return (
    <div className="main-container">
        <Header/>
        <div className="w-full max-width">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="klaman" element={<Klaman />} />
            <Route path="portofolio" element={<Portofolio />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
