import React from 'react';
// style
import { GlobalStyle } from './style/globalstyle';
import { Container } from './app.style';
// components
import Navbar from './components/Navbar';
import Home from './page/Home';
import Curriculum from './page/Curriculum';
import Footer from './components/Footer';
import Apprendre from './page/Apprendre';
import Contact from './page/Contact';
import Profil from './components/curriculum/Profil';
import Exp from './components/curriculum/Exp';
import Forma from './components/curriculum/Forma';
import Info from './components/curriculum/Info';
// Router
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="curriculum" element={<Curriculum />}>
            <Route path="" element={<Profil />} />
            <Route path="exp" element={<Exp />} />
            <Route path="forma" element={<Forma />} />
            <Route path="info" element={<Info />} />
          </Route>
          <Route path="apprendre" element={<Apprendre />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
