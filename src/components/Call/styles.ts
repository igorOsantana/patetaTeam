import styled, { css } from 'styled-components';
import { fadeInUp, fadeOutUp } from '../../global/styles/global';

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

const onHide = css`
  /* animation: ${fadeOutUp} 0.3s ease; */
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
    color: ${({ theme: { colors } }) => colors.main};
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
  opacity: 0;
  max-height: 0;
  transition: all 0.3s;
  ${({ isVisible }) => (isVisible ? onShow : onHide)};
`;

export const Description = styled.div`
  text-align: left;
  margin-bottom: 1rem;
  flex: 2;

  span {
    color: ${({ theme: { colors } }) => colors.main};
    font-size: min(1.75rem, 4vw);
    text-transform: uppercase;
  }
  p {
    margin: 10px 20px;
    font-size: min(1.5rem, 3vw);
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const PlayerContent = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin: 0.5rem 3rem;
  flex: 1;

  p {
    flex: 1;
    color: ${({ theme: { colors } }) => colors.secondary};
    margin: 0px 20px;
    font-style: italic;
  }
`;
