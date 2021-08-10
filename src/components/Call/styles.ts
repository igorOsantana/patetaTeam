import styled, { css } from 'styled-components';
import { fadeInUp } from '../../global/styles/global';

type CallStyleProps = {
  isVisible?: boolean;
};

const onShow = css<CallStyleProps>`
  display: flex;
  flex-direction: column;
  max-height: 50rem;
  margin: 2rem 0 auto;
  padding: 1rem;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  animation-name: ${fadeInUp};
  animation-duration: 0.3s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
`;

export const Container = styled.div<CallStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: max(250px, 95%);
  margin: 0.5rem;
  padding: 1.5rem;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.secondary};
`;

export const Title = styled.div<CallStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    color: red;
  }

  h1 {
    font-size: 2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  svg {
    transition: all 0.2s;
    font-size: 3rem;
    transform: rotate(${({ isVisible }) => (isVisible ? '90deg' : '0deg')});
  }
`;

export const HiddenContainer = styled.div<CallStyleProps>`
  position: relative;
  opacity: 0;
  max-height: 0;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s;
  ${({ isVisible }) => (isVisible ? onShow : null)};

  > svg {
    position: absolute;
    bottom: 2%;
    right: 5%;
    font-size: 3rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: red;
    }
    &:active {
      transform: translateY(5px);
    }
  }
`;

export const Description = styled.div`
  text-align: left;
  flex: 2;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: red;
    font-size: min(1.75rem, 4vw);
    text-transform: uppercase;
  }
  p {
    margin: 0 10px 20px;
    font-size: min(1.5rem, 3vw);
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Grenades = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  span {
    font-size: 0.75rem;
  }
`;

export const PlayerContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: left;
  margin: 0.5rem 3rem;

  p {
    flex: 1;
    color: ${({ theme: { colors } }) => colors.secondary};
    margin: 0px 20px;
    font-style: italic;
  }
`;
