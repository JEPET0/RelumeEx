import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './inicio'
import SobreNosotros from './sobre-nosotros'
import Servicios from './servicios'
import Blog from './blog'
import { Navbar5 } from './components/Navbar5';

function App() {
  return (
    <Router>
      <Navbar5 />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App