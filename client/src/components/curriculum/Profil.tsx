import React from 'react';
import { Container, Wrapper, Item, Left, Img, Right, Desc } from './profile.style';

const Profil = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <Left>
            <Img></Img>
          </Left>
          <Right>
            <Desc></Desc>
          </Right>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Profil;
