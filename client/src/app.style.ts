import styled from 'styled-components';
import variable from './style/variable';

export const Container = styled.div`
  .topBtn {
    position: fixed;
    opacity: 0;
    bottom: 40px;
    right: 40px;
    z-index: -10;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: none;
    background: ${variable.orange};
    color: ${variable.white};
    font-size: ${variable.d18px};
    cursor: pointer;
    transition: opacity 0.3s ease-in;
  }

  .topBtn.active {
    z-index: 10;
    opacity: 1;
  }

  .topBtn:hover,
  .topBtn:focus,
  .topBtn:active {
    outline: 0 none;
  }
`;
