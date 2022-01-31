import styled from 'styled-components';
import { r768px } from '../style/responsive';
import variable from '../style/variable';

interface open {
  readonly open: boolean;
}

export const Container = styled.header`
  background: ${variable.white};
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 99;
`;

export const Wrapper = styled.nav`
  width: ${variable.w1300px};
  height: 60px;
  display: flex;
  padding: 0px 60px;
  ${r768px({ padding: '0px 30px' })};
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  ${r768px({
    flex: '0.2',
  })}
`;

export const Logo = styled.h1`
  width: 100px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  font-size: ${variable.d18px};
  color: ${variable.black};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s linear;
  letter-spacing: 0.07rem;
  text-decoration: 3px underline ${variable.crimson};
  ${r768px({
    fontSize: variable.m18px,
  })}
  &:hover {
    @media (hover: hover) {
      color: ${variable.orange};
      text-decoration: underline ${variable.white};
      font-weight: 500;
    }
  }
`;

export const Center = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
  ${r768px({
    flex: '0.2',
    paddingRight: '10px',
  })}
`;

export const Menu = styled.div<open>`
  font-family: 'Zilla Slab', sans-serif;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  top: 0;
  justify-content: flex-end;
  margin-top: 0px;
  align-items: center;
  font-size: 18px;
  background: #fff;
  margin-left: 20px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    right: ${(props) => (props.open ? '0px' : '-250px')};
    top: 0px;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    margin-left: 0px;
    justify-content: normal;
    transition: all 0.3s linear;
    border-left: 1px solid ${variable.lightgray};
  }
`;

export const Item = styled.a`
  width: 100%;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  font-size: ${variable.d14px};
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  letter-spacing: 0.035rem;
  font-weight: 400;
  text-align: center;
  ${r768px({
    fontSize: variable.m14px,
    marginLeft: '0px',
    paddingLeft: '0px',
  })}
  &:before {
    @media (hover: hover) {
      content: '';
      position: absolute;
      background-color: ${variable.orange};
      height: 3px;
      width: 0;
      bottom: 18px;
      transition: all 0.3s linear;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover:before {
    @media (hover: hover) {
      width: 100%;
    }
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 20px;
  z-index: 99;
  display: none;
  cursor: pointer;
  position: relative;
  font-family: 'Zilla Slab', sans-serif;
  position: fixed;
  ${r768px({
    display: 'flex',
  })}
`;

export const Burger = styled.div<open>`
  width: 30px;
  height: 3px;
  background: ${variable.black};
  border-radius: 10px;
  transition: all 0.3s linear;
  cursor: pointer;
  position: absolute;

  &:nth-child(1) {
    top: ${(props) => (props.open ? '50%' : '0')};
    transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0)')};
  }
  &:nth-child(2) {
    top: 50%;
    transform: ${(props) => (props.open ? 'translateX(100%)' : 'translateX(0)')};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
  &:nth-child(3) {
    top: ${(props) => (props.open ? '50%' : '100%')};
    transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;
