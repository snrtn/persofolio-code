import styled from 'styled-components';
import { r768px, r1280px } from '../../style/responsive';
import variable from '../../style/variable';

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  /* margin: 10px auto 0px auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 60px;
  ${r768px({
    width: '100%',
    flexDirection: 'column',
    padding: '0px 0px',
  })}
  ${r1280px({
    padding: '0px 0px',
  })}

  .gallery {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 10px 0px;
    display: flex;
    height: 82vh;
    ${r768px({
      width: '100%',
      flexDirection: 'column',
    })}
  }
  .gallery li {
    flex: 1;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
  }
  .gallery li:last-child {
    border-right: none;
  }
  .gallery li:nth-child(1) {
    background: url('https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      no-repeat center center;
  }
  .gallery li:nth-child(2) {
    background: url('https://images.pexels.com/photos/7988956/pexels-photo-7988956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      no-repeat center center;
  }
  .gallery li:nth-child(3) {
    background: url('https://www.tourisme-bresil.com/wp-content/uploads/adobestock-215533187-1280x800.jpeg')
      no-repeat center center;
  }

  .gallery:hover li {
    flex: 1;
  }
  .gallery li:hover {
    flex: 3;
    filter: grayscale(1);
  }

  .content_info {
    position: absolute;
    background: #f0f1f2;
    text-align: center;
    height: 200px;
    bottom: -200px;
    transition: 0.5s;
    padding: 30px;
    box-sizing: border-box;
    width: 100%;

    h2 {
      font-size: ${variable.d20px};
      z-index: 5;
    }

    p {
      z-index: 5;
      padding-top: 20px;
      font-weight: 300;
      width: 400px;
      font-size: ${variable.d18px};
      text-align: left;
      margin: auto;
      ${r768px({
        width: '100%',
      })}
    }
  }

  .gallery li:hover .content_info {
    bottom: 0;
    transition-delay: 0.5s;
  }
`;
