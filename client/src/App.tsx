import React from 'react';
import { GlobalStyle } from './style/globalstyle';
import { Container } from './app.style';
import Navbar from './components/Navbar';
import Home from './page/Home';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />

      <Home />
    </Container>
  );
}

export default App;
