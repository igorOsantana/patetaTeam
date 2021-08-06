import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 3.5rem;

  h1 {
    color: ${({ theme: { colors } }) => colors.white};
    font-size: max(3vw, 2.5rem);
    text-transform: capitalize;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
