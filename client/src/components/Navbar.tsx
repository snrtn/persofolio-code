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
// data
import { navbar } from './navbar.data';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Junhan</Logo>
        </Left>
        <Center></Center>
        <Right>
          <Menu open={open}>
            {navbar.map((item) => (
              <Item key={item.id}>{item.name}</Item>
            ))}
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
