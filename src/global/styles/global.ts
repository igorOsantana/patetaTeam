import { createGlobalStyle, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0%{ opacity: 0; filter: blur(10px) }
  25%{ opacity: 0.3; filter: blur(8px) }
  50%{ opacity: 0.5; filter: blur(4px) }
  75%{ opacity: 0.8; filter: blur(2px) }
  100%{ opacity: 1; filter: blur(0px) }
`;

export const fadeInLeft = keyframes`
  0%{ opacity: 0; transform: translateX(-10vw); filter: blur(10px) }
  25%{ opacity: 0.3; transform: translateX(-7vw); filter: blur(8px) }
  50%{ opacity: 0.5; transform: translateX(-5vw); filter: blur(4px) }
  75%{ opacity: 0.8; transform: translateX(-2vw); filter: blur(2px) }
  100%{ opacity: 1; transform: translateX(0vw); filter: blur(0px) }
`;

export const fadeInRight = keyframes`
  0%{ opacity: 0; transform: translateX(10vw); filter: blur(10px) }
  25%{ opacity: 0.3; transform: translateX(7vw); filter: blur(8px) }
  50%{ opacity: 0.5; transform: translateX(5vw); filter: blur(4px) }
  75%{ opacity: 0.8; transform: translateX(2vw); filter: blur(2px) }
  100%{ opacity: 1; transform: translateX(0vw); filter: blur(0px) }
`;

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
