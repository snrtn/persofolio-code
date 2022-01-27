import styled from 'styled-components';
import { r768px, r1280px, r1620px } from '../../style/responsive';
import variable from '../../style/variable';

type open = {
  readonly open: boolean;
};

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  background: #ed6942;
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: ${variable.w1300px};
  height: 450px;
  padding: 30px 0px 30px 65px;
  display: flex;
  ${r768px({ padding: '30px 10px', height: 'auto', width: '100%', flexDirection: 'column' })}
`;
export const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  ${r768px({ padding: '0px 20px' })}
`;
export const IconImg = styled.img`
  width: 100%;
  height: 410px;
  border-radius: 12px;
  background: no-repeat center cover;
  ${r768px({ height: '100%' })}
`;
export const IconContianer = styled.div`
  position: absolute;
  z-index: 5;
`;
export const IconTitle = styled.h1`
  position: absolute;
  font-size: ${variable.d24px};
  font-weight: 500;
  color: ${variable.white};
  top: 150%;
  left: 50%;
  transform: translate(-50%, -100%) scale(1);
  transition: all 1s;
  ${r768px({
    fontSize: variable.m20px,
    fontWeight: '500',
  })}
  ${Left}:hover & {
    @media (hover: hover) {
      transform: translate(-50%, -100%) scale(1.1);
    }
  }
`;
export const IconBox = styled.div`
  position: absolute;
  color: ${variable.white};
  top: 10%;
  left: 50%;
  transform: translate(-50%, -0%) scale(1);
  transition: all 1s;
  ${r768px({
    top: '55%',
  })}
  ${Left}:hover & {
    @media (hover: hover) {
      transform: translate(-50%, -0%) scale(1.1);
    }
  }
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ItmeBox = styled.div`
  width: 100%;
  ${r768px({ width: '100%', marginTop: '10px', padding: '0px 20px' })}
`;
export const Item = styled.a`
  width: 80%;
  height: 195px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${variable.white};
  cursor: pointer;
  transition: all 0.3s linear;
  margin: auto;
  ${r768px({ width: '100%', height: '140px' })}

  &:nth-child(2) {
    margin-top: 20px;
    ${r768px({ marginTop: '10px' })}
  }
`;
export const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  transition: all 1s;
  ${r768px({ width: '70px', height: '70px' })};
  ${Item}:hover & {
    @media (hover: hover) {
      transform: scale(1.1);
    }
  }
`;
export const ItemTitle = styled.h1`
  font-size: ${variable.d18px};
  font-weight: 500;
  padding-left: 20px;
  transition: all 1s;
  ${r768px({ fontSize: variable.m18px, paddingLeft: '10px' })};
  ${Item}:hover & {
    @media (hover: hover) {
      transform: scale(1.1);
    }
  }
`;
export const Document = styled.div<open>`
  display: ${(props) => !props.open && 'none'};
  position: absolute;
  width: 100%;
  height: 2900px;
  top: 0%;
  left: 0%;
  background-color: #00000050;
  z-index: 99;
  cursor: pointer;
`;
export const DocumentImg = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 50%;
  border-radius: 12px;
  background-image: url('https://ifh.cc/g/jBXqGY.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 10;
  ${r768px({
    top: '20%',
    width: '320px',
    height: '500px',
  })}
  ${r1280px({
    top: '30%',
    width: '70%',
    height: '30%',
  })}
  ${r1620px({
    top: '40%',
    width: '70%',
    height: '50%',
  })}
`;
