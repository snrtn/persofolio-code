import styled from 'styled-components';
import { r768px } from '../style/responsive';
import variable from '../style/variable';

export const Contianer = styled.div`
  margin-top: 10px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${variable.white};
  ${r768px({})}
`;

export const Wrapper = styled.div`
  font-size: ${variable.d20px};
  color: ${variable.black};
`;
