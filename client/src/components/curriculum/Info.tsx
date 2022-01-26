import React from 'react';

import { Container } from './info.style';

const Info = () => {
  return (
    <Container>
      <ul className="gallery">
        <li>
          <div className="content_info">
            <h2>Vélo</h2>
            <p>
              J˙ai fait un voyage en vélo à 14ans.
              <br />
              Corée du Sud: Incheon ~ Busan
              <br />
              total: 633km / 6jours
            </p>
          </div>
        </li>
        <li>
          <div className="content_info">
            <h2>Ju-jitsu</h2>
            <p>
              J˙ai pratiqué de 12 à 17 ans.
              <br />
              J˙ai appris plusieurs techniques de défense.
            </p>
          </div>
        </li>
        <li>
          <div className="content_info">
            <h2>Capoera</h2>
            <p>
              J˙ai pratiqué de 14 à 16 ans.
              <br />
              J˙ai appris des techniques simples grace à la simulation de la compétition en
              utilisant différentes actions.
            </p>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Info;
