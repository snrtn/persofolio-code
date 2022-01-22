import styled from 'styled-components';
import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

type call = {
  call: boolean;
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #006266;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  ${r768px({})}
`;

export const Wrapper = styled.div`
  width: ${variable.w1300px};
  height: 500px;
  display: flex;
  padding: 0px 100px 0px 50px;
  ${r768px({ width: '100%', height: '100%', flexDirection: 'column', padding: '0px 30px' })}
  ${r1280px({
    padding: '0px 30px',
  })};
`;

export const Left = styled.section`
  flex: 1;
  height: 500px;
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
  width: 99%;
  height: 450px;
  color: ${variable.white};
  border-radius: 12px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: ${variable.d24px};
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

  .sns {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

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
  font-family: 'Lora', serif;
`;

export const Phone = styled.p`
  font-family: 'Lora', serif;
  margin-top: 20px;
`;
export const Email = styled.a`
  color: ${variable.white};
  text-decoration: 1.2px underline ${variable.blue};
  font-family: 'Lora', serif;
  margin-top: 20px;
`;
export const Address = styled.p`
  font-family: 'Lora', serif;
  margin-top: 20px;
`;

export const Right = styled.div`
  flex: 1;
  height: 500px;
  display: flex;
  justify-content: Right;
  align-items: center;
  position: relative;
`;

export const Image = styled.div`
  width: 99%;
  height: 450px;
  background: white;
  border-radius: 12px;
  background-image: url('https://cdn.pixabay.com/photo/2019/05/23/13/03/video-production-4223885_1280.jpg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  ${r768px({
    width: '100%',
    height: '300px',
    marginTop: '20px',
    marginBottom: '20px',
  })};
`;
export const Video = styled.video<call>`
  display: ${(props) => !props.call && 'none'};
  width: 99%;
  height: 450px;
  cursor: pointer;
  position: absolute;
  ${r768px({
    width: '100%',
    height: '250px',
    marginTop: '20px',
    marginBottom: '20px',
  })};
`;