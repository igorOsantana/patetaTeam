import styled, { css } from 'styled-components';
import { fadeIn } from '../../global/styles/global';

type NavbarProps = {
  onShowMenu: boolean;
};

const menuMobile = css`
  font-size: 2.5rem;
  position: absolute;
  left: 47%;
  top: 25%;
  transform: translateX(-50%);
  animation: ${fadeIn} 0.5s;
`;

export const Container = styled.header<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 4.5rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.main};

  @media (max-width: 540px) {
    ${({ onShowMenu, theme: { colors } }) =>
      onShowMenu
        ? `
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100vw; 
        height: 100vh; 
        z-index:10; 
        align-items: flex-start; 
        background-color: ${colors.bgColor};
        border: 2px solid ${colors.main};
        `
        : null}
  }

  > div {
    cursor: pointer;
    img {
      width: 70px;
      ${({ onShowMenu }) => (onShowMenu ? `opacity: 0;` : null)}
      @media (max-width: 540px) {
        width: 45px;
      }
    }
  }
`;

export const Nav = styled.nav<NavbarProps>`
  @media (max-width: 540px) {
    display: ${({ onShowMenu }) => (onShowMenu ? `block;` : 'none')};
    ${({ onShowMenu }) => (onShowMenu ? menuMobile : null)}
  }

  .selected {
    color: ${({ theme: { colors } }) => colors.main};
  }

  ul {
    display: flex;

    @media (max-width: 540px) {
      flex-direction: column;
      ${({ onShowMenu }) =>
        onShowMenu
          ? `display: flex; justify-content: center; align-items: center;`
          : null}
    }
  }

  li {
    color: ${({ theme: { colors } }) => colors.white};
    margin-left: 1.25rem;
    list-style: none;
    font-weight: bold;
    font-size: 18px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;

    @media (max-width: 540px) {
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }

    &:hover {
      filter: brightness(75%);
    }
  }
`;

export const NavToggle = styled.div<NavbarProps>`
  width: 40px;
  height: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 540px) {
    ${({ onShowMenu }) => (onShowMenu ? `margin-top: 1rem;` : null)}
    display: block;
  }

  .one,
  .two,
  .three {
    background-color: ${({ theme: { colors } }) => colors.white};
    height: 4px;
    width: 100%;
    margin: 5px auto;
    transition-duration: 0.3s;
  }
  .one {
    ${({ onShowMenu }) =>
      onShowMenu ? `transform: rotate(45deg) translate(7px, 6px);` : null}
  }
  .two {
    ${({ onShowMenu }) => (onShowMenu ? `opacity:0;` : null)}
  }
  .three {
    ${({ onShowMenu }) =>
      onShowMenu ? `transform: rotate(-45deg) translate(7px, -7px);` : null}
  }
`;
