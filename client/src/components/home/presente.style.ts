import styled from 'styled-components';
import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

type call = {
  readonly call: boolean;
};

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  background: #ed6942;
  display: flex;
  justify-content: center;
  ${r768px({})}
`;

export const Wrapper = styled.div`
  width: ${variable.w1300px};
  height: 450px;
  display: flex;
  padding: 0px 65px 0px 65px;
  ${r768px({ width: '100%', height: '100%', flexDirection: 'column', padding: '0px 30px' })}
  ${r1280px({
    padding: '0px 30px',
  })};
`;

export const Left = styled.section`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: Left;
  align-items: center;

  ${r768px({
    width: '100%',
    height: '100%',
    marginTop: '20px',
  })};
`;

export const Info = styled.article`
  width: 100%;
  height: 100%;
  color: ${variable.white};
  border-radius: 12px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: ${variable.d20px};
  ${r768px({
    width: '100%',
    height: '250px',
    fontSize: variable.m18px,
  })};
  ${r1280px({
    width: '100%',
    height: '250px',
    fontSize: variable.m18px,
  })};

  button {
    border: none;
    color: white;
    background: none;
    margin-top: 10px;
    font-size: ${variable.d20px};
    transition: all 1s;
    &:hover {
      @media (hover: hover) {
        transform: scale(1.1);
      }
    }
  }

  .sns {
    display: flex;
    align-items: center;
    justify-content: center;

    & button:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      transition: 0.7s;
    }

    & button:hover:before {
      @media (hover: hover) {
        height: 100%;
      }
    }

    & button:nth-child(1):before {
      background-color: #0a66c2;
    }
    & button .fab {
      position: relative;
      transition: 0.5s;
    }
    & button:hover .fab {
      @media (hover: hover) {
        transform: rotateY(360deg);
        color: #fff;
        border-radius: 50%;
      }
    }

    button {
      border: 3px solid #fff;
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      color: #333333;
      text-align: center;
      line-height: 60px;
      font-size: ${variable.d32px};
      margin-left: 10px;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      background-color: white;
      ${r768px({
        justifyContent: variable.m16px,
      })}
    }
  }
`;
export const Name = styled.p`
  font-weight: 500;
`;

export const Phone = styled.p`
  font-weight: 500;
  margin-top: 10px;
`;
export const Email = styled.a`
  font-weight: 500;
  color: ${variable.white};
  text-decoration: 1.2px underline ${variable.royalblue};
  margin-top: 10px;
  transition: all 1s;
  &:hover {
    @media (hover: hover) {
      transform: scale(1.1);
    }
  }
`;
export const Address = styled.p`
  font-weight: 500;
  margin-top: 10px;
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: Right;
  align-items: center;
  position: relative;
`;

export const Image = styled.div`
  width: 100%;
  height: 410px;
  border-radius: 12px;
  background-image: url('https://cdn.pixabay.com/photo/2021/10/27/04/39/camera-6745941_960_720.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  cursor: pointer;
  ${r768px({
    width: '100%',
    height: '300px',
    marginTop: '20px',
    marginBottom: '20px',
  })};
`;

export const Text = styled.p`
  font-weight: 500;
  color: white;
  font-size: ${variable.d20px};
  position: absolute;
  top: 50%;
  left: 50%;
  transition: all 1s;
  transform: translate(-50%, -50%);
  ${Image}:hover & {
    @media (hover: hover) {
      transform: translate(-50%, -50%) scale(1.2);
    }
  }
`;

export const Video = styled.video<call>`
  display: ${(props) => !props.call && 'none'};
  width: 100%;
  height: 410px;
  background: black;
  cursor: pointer;
  position: absolute;
  border-radius: 12px;
  ${r768px({
    width: '100%',
    height: '300px',
    marginTop: '20px',
    marginBottom: '20px',
  })};
`;
