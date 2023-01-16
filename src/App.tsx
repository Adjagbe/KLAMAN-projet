import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './PAGES/Home';
import Klaman from './PAGES/Klaman';
import Portofolio from './PAGES/Portofolio';
import Layout from './ROUTING/Route';
import Header from './SCREENS/Header';
import Header2 from './SCREENS/Header2';
import Slide from './SCREENS/Slide';

function App() {
  return (
    <div className="main-container">
        <Header/>
        <div className="max-width">
          
          <Slide/>
          <Header2/>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="klaman" element={<Klaman />} />
              <Route path="portofolio" element={<Portofolio />} />
            
            </Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
