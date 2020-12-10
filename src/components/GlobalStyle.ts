import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Nanum Myeongjo', serif;
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    user-select: none;
  }

  *::selection {
    background-color: #000000;
    color: #ffffff;
  }
`;

export default GlobalStyle;
