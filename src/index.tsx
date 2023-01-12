// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Header from './SCREENS/Header';
// import Header2 from './SCREENS/Header2';
// import Slide from './SCREENS/Slide';
// import Footer from './SCREENS/Footer';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
  
//   <React.StrictMode>
//     <Header />
//     <Slide />
//     <Header2 />
//     <App />

//   </React.StrictMode>
// );


// reportWebVitals();

import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./PAGES/Home";
import Klaman from "./PAGES/Klaman";
import Portofolio from "./PAGES/Portofolio";
import Header from './SCREENS/Header';
import Slide from './SCREENS/Slide';
import Header2 from './SCREENS/Header2';
import Layout from './ROUTING/Route';


export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Slide/>
      <Header2/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="klaman" element={<Klaman />} />
          <Route path="portofolio" element={<Portofolio />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) ;
root.render(<App />);