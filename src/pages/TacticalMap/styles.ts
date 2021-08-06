import styled from 'styled-components';
import { fadeInDown } from '../../global/styles/global';

type TactialMapProps = {
  animation: boolean;
};

export const Container = styled.div<TactialMapProps>`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  animation: ${({ animation }) => (animation ? fadeInDown : null)} 0.35s both;
`;
