import React from 'react';
import { Container } from './curriculum.style';

import CurriNav from '../components/curriculum/CurriNav';
import { Outlet } from 'react-router-dom';

const Curriculum = () => {
  return (
    <Container>
      <CurriNav />
      <Outlet />
    </Container>
  );
};

export default Curriculum;
