import styled from 'styled-components';
import { PlayerProps } from '.';

export const Container = styled.div<PlayerProps>`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: max(5vw, 2rem);
  height: max(5vw, 2rem);
  border-radius: 50%;
  border: 1px solid ${({ theme: { colors } }) => colors.main};
`;