import styled from 'styled-components';
import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

type bg = {
  bg: string;
};
type direction = {
  direction: string;
};
type slideIndex = {
  slideIndex: number;
};

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  position: relative;
  overflow: hidden;
  ${r768px({
    overflow: 'visble',
    zIndex: '0',
  })}
`;

export const Arrow = styled.div<direction>`
  width: 50px;
  height: 50px;
  background-color: ${variable.white};
  border-radius: 50%;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '60px'};
  right: ${(props) => props.direction === 'right' && '60px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 20;
  transition: all 1.25s ease;
  ${r768px({
    width: '30px',
    height: '30px',
  })}
  @media (max-width: 768px) {
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
  }
  ${r1280px({
    width: '30px',
    height: '30px',
  })}
  @media (max-width: 1280px) {
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
  }

  &:hover {
    @media (hover: hover) {
      color: white;
      background-color: black;
    }
  }
`;

export const Wrapper = styled.div<slideIndex>`
  height: 100%;
  display: flex;
  justify-content: center;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const SubWrapper = styled.div<bg>`
  width: 100vw;
  height: 500px;
  display: flex;
  background: #${(props) => props.bg};
  justify-content: center;
  ${r768px({
    height: '420px',
  })}
`;

export const Slide = styled.div`
  width: ${variable.w1300px};
  padding: 0px 0px 0px 55px;
  height: 500px;
`;

export const SubSlide = styled.div`
  height: 500px;
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  ${r768px({
    justifyContent: 'start',
    padding: '130px 50px 0px 30px',
  })}
`;
export const Title = styled.h1`
  font-size: ${variable.d30px};
  letter-spacing: 0.07rem;
  font-weight: 500;
  ${r768px({
    fontSize: variable.m30px,
  })}
`;

export const Desc = styled.p`
  font-size: ${variable.d20px};
  letter-spacing: 0.035rem;
  font-weight: 300;
  padding-top: 10px;
  ${r768px({
    fontSize: variable.m20px,
  })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${r768px({
    display: 'none',
  })}
`;
export const Img = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
`;
