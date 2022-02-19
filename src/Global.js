import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font-family: sans-serif;
    background-color: #132742;
  }

  button {
    cursor: pointer;
  }

  //centralizar a estilização do app 
  .app {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;