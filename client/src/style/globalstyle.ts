import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
        /* not del ++++ font-family: 'Lora', serif; */
        font-family: 'Roboto', sans-serif;
        margin: 0;
        font-weight: 400;
        box-sizing: border-box;
      }
      a {
        text-decoration: none;
        color: #000000;
      }
      button,
      input {
        outline: none;
      }
      button,
      input[type='button'],
      input[type='submit'],
      input[type='reset'] {
        cursor: pointer;
      }
      ol,
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: normal;
        margin-top: 0;
        transform: rotate(0.06deg);
      }

      /* scroll bar */
      body::-webkit-scrollbar {
        width: 12px;
      }

      body::-webkit-scrollbar-thumb {
        background-color: #333333;
        border: 1px solid #e4e4e4;
        border-radius: 3px;
      }

      body::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border: none;
      }
`;
