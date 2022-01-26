import { Container, Wrapper, Menu } from './curriNav.style';
import { Link } from 'react-router-dom';

// style link
import styled from 'styled-components';
import { r768px } from '../../style/responsive';
import variable from '../../style/variable';

const Item = styled(Link)`
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-size: ${variable.d18px};
  ${r768px({
    height: '30px',
    lineHeight: '30px',
    fontSize: variable.m16px,
  })}

  &:before,
  &:after {
    position: absolute;
    content: attr(data-link);
    width: 100%;
    transition: all 0.75s;
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    top: 100%;
    left: 0;
    color: ${variable.orange};
  }

  &:hover:before {
    @media (hover: hover) {
      top: -100%;
    }
  }
  &:hover:after {
    @media (hover: hover) {
      top: 0;
    }
  }
`;

const CurriNav = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Item data-link="Profil" to="/curriculum"></Item>
          <Item data-link="Expériences Professionnelles" to="/curriculum/exp"></Item>
          <Item data-link="Formation" to="/curriculum/forma"></Item>
          <Item data-link="Centre d'intérêt" to="/curriculum/info"></Item>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default CurriNav;
