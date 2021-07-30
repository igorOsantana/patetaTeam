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
    font-size: 3rem;
    text-transform: capitalize;
  }
  img {
    width: 7rem;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Call = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.black};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(75%);
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
  svg {
    font-size: 3rem;
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
