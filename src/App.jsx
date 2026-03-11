import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ServicesPage from './components/Services';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Services" element={<ServicesPage/>} />
        <Route path="/About" element={<AboutPage/>} />
         <Route path="/" element={<HomePage/>} />
          <Route path="/Contact" element={<ContactPage/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;