import styled, { css } from 'styled-components';
import { fadeIn } from '../../global/styles/global';

type NavbarProps = {
  onShowMenu: boolean;
};

const menuMobileContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  align-items: flex-start;
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  border: 2px solid ${({ theme: { colors } }) => colors.secondary};
`;

const menuMobileUlContent = css`
  font-size: 2.5rem;
  position: absolute;
  left: 47%;
  top: 10%;
  transform: translateX(-50%);
  animation: ${fadeIn} 0.5s;
`;

export const Container = styled.header<NavbarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray};
  padding: 0 4rem;
  transition: all 0.3s;

  @media (max-width: 700px) {
    justify-content: space-between;
    ${({ onShowMenu, theme: { colors } }) =>
      onShowMenu ? menuMobileContainer : null}
  }

  > div {
    cursor: pointer;
    img {
      width: 70px;
      margin: 0.5rem;
      ${({ onShowMenu }) => (onShowMenu ? `opacity: 0;` : null)}
    }
  }
`;

export const Nav = styled.nav<NavbarProps>`
  transition: all 0.3s;
  @media (max-width: 700px) {
    display: ${({ onShowMenu }) => (onShowMenu ? `block;` : 'none')};
    ${({ onShowMenu }) => (onShowMenu ? menuMobileUlContent : null)}
  }

  .selected {
    color: ${({ theme: { colors } }) => colors.secondary};
    border-bottom: 4px solid ${({ theme: { colors } }) => colors.secondary};
    animation: ${fadeIn} 0.3s;
  }

  ul {
    display: flex;

    @media (max-width: 700px) {
      flex-direction: column;
      ${({ onShowMenu }) =>
        onShowMenu
          ? `display: flex; 
            justify-content: center; 
            align-items: center;`
          : null}
    }
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.white};
    list-style: none;
    font-weight: bold;
    font-size: 20px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    height: 94px;

    @media (max-width: 700px) {
      margin-bottom: 2rem;
      font-size: 2.5rem;

      svg {
        font-size: 2.5rem;
      }
    }

    &:hover {
      filter: brightness(75%);
    }

    a {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    }

    svg {
      margin-right: 0.25rem;
    }

    &:last-child {
      cursor: auto;

      &:hover {
        filter: none;
      }

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 5rem;
        border-radius: 3px;
        border: 1px solid ${({ theme: { colors } }) => colors.white};
        padding: 0.75rem 1.25rem;
        transition: all 0.2s;

        @media (max-width: 700px) {
          margin-left: 0;
        }

        &:hover {
          color: ${({ theme: { colors } }) => colors.black};
          background-color: ${({ theme: { colors } }) => colors.white};
        }

        svg {
          margin-left: 0.5rem;
          margin-right: 0;
        }
      }
    }
  }
`;

export const NavToggle = styled.div<NavbarProps>`
  width: 50px;
  height: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: 700px) {
    ${({ onShowMenu }) => (onShowMenu ? `margin-top: 1.85rem;` : null)}
    display: block;
  }

  .one,
  .two,
  .three {
    background-color: ${({ theme: { colors } }) => colors.white};
    height: 5px;
    width: 100%;
    margin: 8px auto;
    transition-duration: 0.3s;
  }
  .one {
    ${({ onShowMenu }) =>
      onShowMenu ? `transform: rotate(45deg) translate(10px, 10px);` : null}
  }
  .two {
    ${({ onShowMenu }) => (onShowMenu ? `opacity:0;` : null)}
  }
  .three {
    ${({ onShowMenu }) =>
      onShowMenu ? `transform: rotate(-45deg) translate(9px, -9px);` : null}
  }
`;

export const ButtonLogOut = styled.button``;
