import styled from 'styled-components';
import { r768px } from '../style/responsive';
import variable from '../style/variable';

export const Contianer = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e7e7e7;
`;

export const Wrapper = styled.div`
  font-size: ${variable.d18px};
  color: ${variable.black};

  ${r768px({ fontSize: variable.m16px })}
`;
