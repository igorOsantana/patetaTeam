import styled from 'styled-components';
import { fadeInLeft, fadeInUp } from '../../global/styles/global';

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const TitlePage = styled.div`
  display: block;
  animation: ${fadeInLeft} 0.3s;

  h1 {
    font-size: 4rem;
    color: ${({ theme: { colors } }) => colors.white};
    text-align: left;
  }
`;

export const MapTabsContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.3s;
`;
