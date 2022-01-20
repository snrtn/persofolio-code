import React from 'react';
import { Container, Wrapper, Left, Img, Right, Title } from './annonce.style';

const Annonce = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Img></Img>
        </Left>
        <Right>
          <Title
            href="https://github.com/snrtn/portfolio"
            target="_blank"
            rel="noopener noreferrer">
            Ce projet continue mise à jour.
          </Title>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Annonce;
