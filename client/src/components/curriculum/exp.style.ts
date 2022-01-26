import styled from 'styled-components';
import { r768px, r1280px, r1620px } from '../../style/responsive';
import variable from '../../style/variable';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  margin: 10px auto 0px auto;
  ${r768px({
    width: '100%',
  })}

  .container {
    display: flex;
    width: 100%;

    padding: 0px 60px;
    position: absolute;
    color: white;
    ${r768px({
      padding: '0px 0px',
    })}
    ${r1280px({
      padding: '0px 0px',
    })}

    .backimg {
      width: 100%;
      height: 82vh;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all 1.5s;
    }

    .textbox {
      position: absolute;
      top: 47.5%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      height: 390px;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 50px 50px 0px 50px;
      box-sizing: border-box;
      color: white;
      ${r768px({
        width: '100%',
        height: '100%',
        margin: '20px 0px',
        padding: '230px 50px 0px 50px',
      })}
      ${r1280px({
        width: '100%',
      })}

      .title {
        font-size: ${variable.d24px};
        font-weight: 500;
        color: white;
        ${r768px({
          fontSize: variable.m20px,
        })}
      }

      .subtitle {
        font-size: ${variable.d18px};
        font-weight: 200;
        margin-bottom: 10px;
        color: white;
        ${r768px({
          fontSize: variable.m16px,
        })}
      }

      .data {
        margin-top: 20px;
        font-size: ${variable.d18px};
        font-weight: 400;
        color: white;
        ${r768px({
          fontSize: variable.m16px,
        })}
      }

      .mission {
        margin-top: 10px;
        font-weight: 400;
        text-align: center;
        position: relative;
        color: white;
        font-size: 16px;

        &:before,
        &:after {
          content: '';
          background-color: white;
          height: 1px;
          width: 40%;
          position: absolute;
          top: 12px;
        }
        &:before {
          left: 0;
        }
        &:after {
          right: 0;
        }
      }

      .dect {
        font-size: ${variable.d18px};
        margin-top: 10px;
        font-weight: 300;
        color: white;
        ${r768px({
          fontSize: variable.m16px,
        })}
      }
    }
  }

  .buttonbox {
    position: absolute;
    width: inherit;
    height: 60px;
    background-color: white;
    bottom: 130px;
    box-sizing: border-box;
    border-top: none;
    background: transparent;
    ${r768px({
      width: '100%',
      bottom: '60px',
    })}
    ${r1280px({
      width: '100%',
    })}

    .controle {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      bottom: 40px;
      ${r768px({
        width: '100%',
        justifyContent: 'center',
        bottom: '-35px',
      })}
      ${r1280px({
        bottom: '-25px',
      })}
      ${r1620px({
        bottom: '-25px',
      })}

      .icon {
        width: 60px;
        height: 60px;
        background: #ffffff99;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          @media (hover: hover) {
            background: #ffffff;
          }
        }
        ${r768px({
          width: '40px',
          height: '40px',
        })}
      }

      .left {
        margin-right: 100px;
        ${r768px({
          marginRight: '50px',
        })}
      }
    }
  }
`;
