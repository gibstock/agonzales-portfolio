import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: linear-gradient(to bottom, #000 80%, #222);
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    overflow-x: hidden;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  video{
    border-radius: 25px;
    padding: 20px;
  }
      /* width */
  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background:#111;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #000, #555, #000);
    
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #000, hsl(210, 45%, 50%), #000);
  }

`;

export default GlobalStyles;