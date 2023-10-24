import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';

    ::-webkit-scrollbar-track {
      background-color: #1B1B1B;
    }

    ::-webkit-scrollbar {
      width: 6px;
      background: #1B1B1B;
    }

    ::-webkit-scrollbar-thumb {
      background: #808080;
      border-radius: 8px;
    }
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: #1B1B1B;
    color: #FFF;
  }

  body, input, button {
    font-size:  14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }


  button {
    cursor: pointer;
  }

`;
