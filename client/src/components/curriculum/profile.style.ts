import styled from 'styled-components';

import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px 0px;
  ${r768px({})}
`;
export const Wrapper = styled.div`
  margin-top: 20px;
  width: ${variable.w1300px};
  height: 450px;
  padding: 0px 60px;
  ${r768px({
    width: '100%',
    height: '100%',
    padding: '0px 30px',
  })}
  ${r1280px({
    width: '100%',
    height: '100%',
    padding: '0px 30px',
  })}
`;
export const Item = styled.section`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  ${r768px({
    flexDirection: 'column',
  })}
`;
export const Left = styled.article`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  width: 360px;
  height: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  ${r768px({
    width: '100%',
  })}
`;
export const Right = styled.article`
  flex: 1;
  display: flex;
  justify-content: center;
`;
export const Desc = styled.p`
  width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 50px;
  font-size: ${variable.d20px};
  text-align: justify;
  ${r768px({
    width: '100%',
    padding: '50px 0px',
    fontSize: variable.m18px,
  })}
  ${r1280px({
    width: '100%',
  })};
`;
