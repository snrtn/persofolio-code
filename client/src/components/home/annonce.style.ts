import styled from 'styled-components';
import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

export const Container = styled.section`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  background: #317256;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: ${variable.w1300px};
  height: 400px;
  box-sizing: border-box;
  display: flex;
  padding: 0px 0px 0px 65px;
  ${r768px({
    flexDirection: 'column',
    padding: '20px 0px',
  })}
`;
export const Left = styled.div`
  flex: 1;
  padding: 25px 70px 25px 0px;
  /* background: white; */
  ${r768px({ padding: '0px 30px' })}
  ${r1280px({ padding: '30px 0px' })}
`;
export const Img = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  background-image: url('https://cdn.pixabay.com/photo/2017/02/19/23/09/success-2081168_960_720.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
`;
export const Right = styled.div`
  flex: 1;
  height: 400px;
  display: flex;
  justify-content: Left;
  align-items: center;
  ${r768px({ padding: '0px 30px' })}
`;

export const Title = styled.a`
  color: ${variable.white};
  font-size: ${variable.d20px};
  margin-left: 100px;
  ${r768px({
    fontSize: variable.m18px,
    margin: 'auto',
  })};
  ${r1280px({
    fontSize: variable.m20px,
    marginLeft: '65px',
  })};
`;
