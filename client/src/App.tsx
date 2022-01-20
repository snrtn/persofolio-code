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
// Router
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route caseSensitive={false} path="/" element={<Home />} />
          <Route caseSensitive={false} path="/curriculum" element={<Curriculum />} />
          <Route caseSensitive={false} path="/apprendre" element={<Apprendre />} />
          <Route caseSensitive={false} path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
