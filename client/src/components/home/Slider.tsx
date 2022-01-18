import React, { useState } from 'react';
// icon
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
// style
import {
  Container,
  Wrapper,
  SubWrapper,
  Slide,
  SubSlide,
  Left,
  Title,
  Desc,
  Right,
  Img,
  Arrow,
} from './slider.style';
// data
import { slider } from './slider.data';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined style={{ fontSize: 35 }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slider.map((item) => (
          <SubWrapper bg={item.bg} key={item.id}>
            <Slide>
              <SubSlide>
                <Left>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                </Left>
                <Right>
                  <Img src={item.img}></Img>
                </Right>
              </SubSlide>
            </Slide>
          </SubWrapper>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined style={{ fontSize: 35 }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
