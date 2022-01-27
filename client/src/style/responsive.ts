import { css } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const r768px = (props: any) => {
  return css`
    @media only screen and (min-width: 0px) and (max-width: 768px) {
      ${props}
    }
  `;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const r1280px = (props: any) => {
  return css`
    @media only screen and (min-width: 768px) and (max-width: 1280px) {
      ${props}
    }
  `;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const r1620px = (props: any) => {
  return css`
    @media only screen and (min-width: 1280px) and (max-width: 1620px) {
      ${props}
    }
  `;
};

// 사이즈 추가하기
