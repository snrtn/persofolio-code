import React from 'react';
// style
import { Container } from './home.style';
// components
import Slider from '../components/home/Slider';
import Motive from '../components/home/Motive';
import Project from '../components/home/Project';
import Presente from '../components/home/Presente';
import Annonce from '../components/home/Annonce';

const Home = () => {
  return (
    <Container>
      <Slider />
      <Motive />
      <Project />
      <Presente />
      <Annonce />
    </Container>
  );
};

export default Home;
