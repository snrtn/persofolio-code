import React, { useState } from 'react';
// icon
import { ZoomIn } from '@material-ui/icons';
// style
import {
  Container,
  Wrapper,
  Left,
  IconImg,
  IconContianer,
  IconTitle,
  IconBox,
  Right,
  ItmeBox,
  Item,
  ItemImg,
  ItemTitle,
  Document,
  DocumentImg,
} from './motive.style';
// data
import { motive } from './motive.data';

const Motivation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <Wrapper>
          <Left onClick={() => setOpen(true)}>
            <IconImg src="https://images.pexels.com/photos/7063763/pexels-photo-7063763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <IconContianer>
              <IconTitle>Motivation</IconTitle>
              <IconBox>
                <ZoomIn style={{ fontSize: 30 }} />
              </IconBox>
            </IconContianer>
          </Left>
          <Right>
            <ItmeBox>
              {motive.map((item) => (
                <Item href={item.url} key={item.id} target="_blank" rel="noopener noreferrer">
                  <ItemImg src={item.img} />
                  <ItemTitle>{item.name}</ItemTitle>
                </Item>
              ))}
            </ItmeBox>
          </Right>
        </Wrapper>
      </Container>
      <Document open={open} onClick={() => setOpen(false)}>
        <DocumentImg />
      </Document>
    </>
  );
};

export default Motivation;
