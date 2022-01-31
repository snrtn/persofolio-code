import styled from 'styled-components';
import { r768px, r1280px } from '../style/responsive';
import variable from '../style/variable';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #317256;

  .contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 70px;

    ${r768px({
      width: '100%',
      height: '100%',
    })}
    ${r1280px({
      width: '100%',
      height: '100%',
    })}

    .imgs {
      img {
        width: 500px;
        height: 650px;
        margin-right: 30px;
      }
      ${r768px({
        display: 'none',
      })}
      ${r1280px({
        display: 'none',
      })}
    }

    .contact-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 800px;
      flex-direction: column;
      ${r768px({
        width: '100%',
        padding: '20px 0px',
      })}
      ${r1280px({
        width: '100%',
        padding: '20px 0px',
      })}

      h1 {
        width: 500px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin-bottom: 20px;
        font-size: ${variable.d20px};
        color: white;
        font-weight: bold;
        border-radius: 8px;
        ${r768px({
          width: '320px',
          borderRadius: '0px',
        })}
      }

      .name-container {
        input {
          width: 500px;
          background: #f4f1e6;
          padding: 10px 20px;
          border: none;
          font-size: ${variable.d18px};
          border-radius: 8px;
          ${r768px({
            width: '320px',
            borderRadius: '0px',
          })}
        }
      }

      .email-container {
        margin: 20px 0px;
        input {
          width: 500px;
          background: #f4f1e6;
          padding: 10px 20px;
          border: none;
          font-size: ${variable.d18px};
          border-radius: 8px;
          ${r768px({
            width: '320px',
            borderRadius: '0px',
          })}
        }
      }

      .text-container {
        textarea {
          width: 500px;
          font-size: ${variable.d18px};
          padding: 20px 20px;
          border: none;
          border-radius: 8px;
          background: #f4f1e6;
          ${r768px({
            width: '320px',
            borderRadius: '0px',
          })}
        }
      }

      .btn-container {
        margin-top: 20px;
        .btn {
          width: 500px;
          height: 50px;
          padding: 10px 20px;
          background: transparent;
          color: white;
          outline: none;
          font-size: ${variable.d20px};
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          transition: all 1s;
          &:hover {
            @media (hover: hover) {
              transform: scale(1.1);
            }
          }
          ${r768px({
            width: '320px',
            borderRadius: '0px',
          })}
        }
      }
    }
  }
`;
