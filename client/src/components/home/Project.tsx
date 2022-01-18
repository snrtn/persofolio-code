import React from 'react';
// icon
// style
import {
  Container,
  Wrapper,
  SubWrapper,
  Item,
  ItemBox,
  Img,
  Title,
  Desc,
  Code,
} from './project.style';
// data
import { project } from './project.data';

const Project = () => {
  return (
    <Container>
      <Wrapper>
        <SubWrapper>
          {project.map((item) => (
            <Item key={item.id}>
              <ItemBox href={item.site} target="_blank" rel="noopener noreferrer">
                <Img src={item.img} />
                <Title>{item.title}</Title>
                <Desc>{item.desc1}</Desc>
                <Desc>{item.desc2}</Desc>
                <Desc>{item.desc3}</Desc>
                <Code href={item.code} target="_blank" rel="noopener noreferrer">
                  Souce Code
                </Code>
              </ItemBox>
            </Item>
          ))}
        </SubWrapper>
      </Wrapper>
    </Container>
  );
};

export default Project;
