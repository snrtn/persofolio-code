import { Container, Wrapper, Item, Left, Img, Right, Desc } from './profile.style';
import { profil } from './profile.data';

const Profil = () => {
  return (
    <Container>
      {profil.map((item) => (
        <Wrapper key={item.id}>
          <Item>
            <Left>
              <Img src={item.img}></Img>
            </Left>
            <Right>
              <Desc>{item.desc}</Desc>
            </Right>
          </Item>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Profil;
