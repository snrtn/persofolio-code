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
  Video,
} from './presente.style';

const Presente = () => {
  const [call, setCall] = useState(false);

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
                onClick={() =>
                  window.open('https://www.linkedin.com/in/hanjun-kim-1b1741171/', '_blank')
                }>
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </Info>
        </Left>
        <Right>
          <Image onClick={() => setCall(true)}></Image>
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
