import React, { useState } from 'react';
// style
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Center,
  Right,
  Menu,
  Item,
  Icon,
  Burger,
} from './navbar.style';
// router
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>HanJun</Logo>
          </Link>
        </Left>
        <Center></Center>
        <Right>
          <Menu open={open}>
            <Link to="/">
              <Item>Accueil</Item>
            </Link>
            <Link to="/curriculum">
              <Item>Curriculum</Item>
            </Link>
            {/* <Link to="/apprendre">
              <Item>Apprendre</Item>
            </Link> */}
            <Link to="/contact">
              <Item>Contact</Item>
            </Link>
          </Menu>

          <Icon onClick={() => setOpen(!open)}>
            <Burger open={open}></Burger>
            <Burger open={open}></Burger>
            <Burger open={open}></Burger>
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
