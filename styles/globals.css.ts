import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #1a1a1a;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background-color: #fff;
    color: #1a1a1a;
  }

  ::-moz-selction {
    background-color: #fff;
    color: #1a1a1a;
  }
`;

export default GlobalStyle;
