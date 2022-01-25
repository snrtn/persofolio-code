import styled from 'styled-components';
import { r768px } from '../../style/responsive';
import variable from '../../style/variable';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  background-color: #f4f1e6;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: ${variable.w1300px};
  height: 45px;
  padding: 0px 50px;
  ${r768px({
    height: '100%',
  })}
`;
export const Menu = styled.div`
  width: 100%;
  height1: 100%;
  display: flex;
  ${r768px({
    flexDirection: 'column',
  })}
`;
