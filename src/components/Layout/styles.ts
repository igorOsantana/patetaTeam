import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    flex: 1;
  }
`;

export const Body = styled.main`
  flex: 8;
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding: 3rem;
`;

export const Footer = styled.footer`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.white};
  font-size: 14px;
  padding: 0 3rem;

  @media (max-width: 540px) {
    font-size: 10px;
  }
`;
