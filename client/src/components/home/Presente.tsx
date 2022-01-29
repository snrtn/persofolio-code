import React, { useState } from 'react';
import {
  Container,
  Wrapper,
  Left,
  Info,
  Name,
  Phone,
  Email,
  Address,
  Right,
  Image,
  Text,
  Video,
} from './presente.style';
import { saveAs } from 'file-saver';

const Presente = () => {
  const [call, setCall] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const saveFile = () => {
    saveAs(
      'https://drive.google.com/file/d/1bCQQHXHOwHxEV-Fw95sJrjhCEqgiBhdL/view?usp=sharing',
      'example.pdf',
    );
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Info>
            <Name>HanJun Kim</Name>
            <Phone>(+33) 6 27 24 46 02</Phone>
            <Email href="mailto:'hanjun.kim.dev@gmail.com">hanjun.kim.dev@gmail.com</Email>
            <Address>77600 Bussy-Saint-Georges</Address>
            <div className="sns">
              <button
                className="icon"
                onClick={() =>
                  window.open('https://www.linkedin.com/in/hanjun-kim-1b1741171/', '_blank')
                }>
                <i className="fab fa-linkedin-in"></i>
              </button>
              <div className="toolbox">
                <button className="icon" onClick={saveFile}>
                  <i className="fas fa-file-pdf"></i>
                </button>
                <span>Curriculum vitæ</span>
              </div>
            </div>
          </Info>
        </Left>
        <Right>
          <Image onClick={() => setCall(true)}>
            <Text>Click</Text>
          </Image>
          <Video
            call={call}
            onClick={() => setCall(false)}
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Presente;
