import styled from 'styled-components';
import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background: #e67e22;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  width: 1150px;
  height: 500px;
  box-sizing: border-box;
  display: flex;
  ${r768px({
    flexDirection: 'column',
    padding: '20px 0px',
  })}
`;
export const Left = styled.div`
  flex: 1;
  padding: 30px 50px 30px 0px;
  ${r768px({ padding: '0px 30px' })}
  ${r1280px({ padding: '30px 30px' })}
`;
export const Img = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2015/08/08/19/55/confused-880735_960_720.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
`;
export const Right = styled.div`
  flex: 1;
  height: 500px;
  display: flex;
  justify-content: Left;
  align-items: center;
  ${r768px({ padding: '0px 30px' })}
`;

export const Title = styled.a`
  color: ${variable.white};
  font-size: ${variable.d24px};
  font-family: 'Lora', serif;
  margin-left: 125px;
  ${r768px({
    fontSize: variable.m18px,
    margin: 'auto',
  })};
  ${r1280px({
    fontSize: variable.m20px,
    marginLeft: '125px',
  })};
`;
