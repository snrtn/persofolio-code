import React from 'react';
// style
import { Container } from './home.style';
// components
import Slider from '../components/home/Slider';
import Motive from '../components/home/Motive';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Motive />
    </Container>
  );
};

export default Home;
