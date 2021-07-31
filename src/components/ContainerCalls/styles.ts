import styled from 'styled-components';
import { fadeInDown } from '../../global/styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  animation: ${fadeInDown} 0.3s;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;

  h1 {
    color: ${({ theme: { colors } }) => colors.white};
    font-size: max(3vw, 2.5rem);
    text-transform: capitalize;
  }
  img {
    width: max(5rem, 10vw);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
