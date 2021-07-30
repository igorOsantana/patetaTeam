import styled from 'styled-components';

import { fadeInLeft } from '../../global/styles/global';

export const Container = styled.div`
  height: 8rem;
  width: 30rem;
  border-radius: 5px;
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.secondary};
  padding: 1rem 2rem;
  font-size: 1.75rem;
  color: ${({ theme: { colors } }) => colors.black};
  background-color: ${({ theme: { colors } }) => colors.white};
  cursor: pointer;
  transition: all 0.3s;
  animation: ${fadeInLeft} 0.35s;

  &:hover {
    filter: brightness(85%);
  }
  &:active {
    filter: brightness(50%);
    transform: translateY(2px);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 400px) {
    justify-content: center;
  }

  svg {
    font-size: 4rem;
  }

  p {
    margin-top: 5px;
    margin-left: 25px;
    font-size: 3rem;
    white-space: nowrap;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;
