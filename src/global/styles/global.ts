import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @media(max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 768px) {
    html {
      font-size: 74%;
    }
  }
  @media(max-width: 480px) {
    html {
      font-size: 67.75%;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme: { colors } }) => colors.bgColor};
    font-family: 'Roboto', sans-serif;    
    overflow-x: hidden;
  }
  button {
    cursor: pointer;

    &:hover {
      filter: brightness(125%);
    }
    &:active {
      filter: brightness(150%);
    }
    &:disabled {
      opacity: .3;
      cursor: not-allowed;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
