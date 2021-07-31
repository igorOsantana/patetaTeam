import styled from 'styled-components';
import { fadeInLeft, fadeInUp } from '../../global/styles/global';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitlePage = styled.div`
  display: block;
  padding: 0 2rem;
  margin-bottom: 1.5em;
  animation: ${fadeInLeft} 0.3s;

  h1 {
    font-size: max(3vw, 3.5rem);
    color: ${({ theme: { colors } }) => colors.white};
    text-align: left;
  }
`;

export const MapTabsContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  animation: ${fadeInUp} 0.3s;
`;
