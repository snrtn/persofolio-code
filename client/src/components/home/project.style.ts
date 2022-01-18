import styled from 'styled-components';
import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0a3d62;
  ${r768px({
    width: '100%',
  })};
`;
export const Wrapper = styled.section`
  width: ${variable.w1300px};
  height: 500px;
  padding: 20px 50px;
  ${r768px({
    width: '100%',
    height: '100%',
    padding: '20px 30px',
  })};
`;
export const SubWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  ${r768px({
    width: '100%',
    height: '100%',
    flexDirection: 'column',
  })};
`;
export const Item = styled.article`
  flex: 1;
  height: 440px;
  margin-right: 10px;
  z-index: 5px;
  ${r768px({
    width: '100%',
    height: '100%',
    paddingTop: '10px',
    marginRight: '0px',
  })};
`;
export const ItemBox = styled.a`
  width: 270px;
  height: 100%;
  display: inline-block;
  border-radius: 12px;
  background: #444444;
  overflow: hidden;
  ${r768px({
    width: '100%',
  })};
`;
export const Img = styled.img`
  width: 100%;
  height: 220px;
  object-position: top;
  object-fit: cover;
  overflow: hidden;
  transition: all 1.6s linear;

  ${ItemBox}:hover & {
    @media (hover: hover) {
      object-position: bottom;
    }
  }
`;
export const Title = styled.h1`
  width: 100%;
  height: 60px;
  padding: 8px 15px;
  font-size: ${variable.d16px};
  color: ${variable.white};
  font-weight: 500;
  display: flex;
  align-items: center;
  ${r768px({
    fontSize: variable.m18px,
  })};
  ${r1280px({
    padding: '2px 10px',
  })};
`;
export const Desc = styled.p`
  width: 100%;
  height: 20px;
  margin-top: 10px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  color: ${variable.white};
  font-size: ${variable.d14px};
  font-weight: 400;
  ${r768px({
    fontSize: variable.m16px,
    display: 'none',
  })};
  ${r1280px({
    padding: '0px 10px',
    height: '25px',
  })};
`;
export const Code = styled.a`
  width: 100%;
  height: 56px;
  margin-top: 10px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  font-size: ${variable.d16px};
  background: #444444;
  color: ${variable.white};
  font-weight: 500;
  transition: all 0.3s linear;
  &:hover {
    @media (hover: hover) {
      background: #e4e4e4;
      color: ${variable.black};
    }
  }
  ${r768px({
    fontSize: variable.m18px,
    marginTop: '0px',
    height: '60px',
    borderTop: '0px',
  })};
  ${r1280px({
    padding: '0px 0px 20px 10px',
  })};
`;
