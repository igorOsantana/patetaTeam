import styled from 'styled-components';

import { fadeInLeft } from '../../global/styles/global';

type MapActionProps = {
  color: string;
  borderColor: string;
};

export const Container = styled.div<MapActionProps>`
  height: 8rem;
  border-radius: 5px;
  border-bottom: 3px solid ${({ borderColor }) => borderColor};
  padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ color }) => color};
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

  img {
    width: 6rem;
  }

  p {
    margin-top: 5px;
    margin-left: 25px;
    font-size: 3rem;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;
