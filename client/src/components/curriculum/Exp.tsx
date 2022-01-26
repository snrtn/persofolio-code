import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { Container } from './exp.style';
import { exp } from './exp.data';

const Exp = () => {
  const [exImg, setexImg] = useState(0);

  return (
    <Container>
      <div className="container">
        <div className="backimg" style={{ backgroundImage: `url(${exp[exImg].img})` }} />
        <div className="textbox">
          <p className="title">{exp[exImg].title}</p>
          <p className="subtitle">{exp[exImg].subtitle}</p>
          <hr />
          <p className="data">{exp[exImg].data}</p>
          <p className="mission">Mission</p>
          <p className="dect">{exp[exImg].dect}</p>
          <p className="dect">{exp[exImg].decta}</p>
          <p className="dect">{exp[exImg].dectb}</p>
        </div>
      </div>
      <div className="buttonbox">
        <div className="controle">
          <ArrowLeftOutlined
            className="icon left"
            onClick={() => {
              exImg > 0 && setexImg(exImg - 1);
            }}
          />
          <ArrowRightOutlined
            className="icon"
            onClick={() => {
              exImg < exp.length - 1 && setexImg(exImg + 1);
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Exp;
