import React from 'react';
// style
import { Container } from './home.style';
// components
import Slider from '../components/home/Slider';
import Motive from '../components/home/Motive';
import Project from '../components/home/Project';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Motive />
      <Project />
    </Container>
  );
};

export default Home;
