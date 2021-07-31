import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.main`
  flex: 8;
  text-align: center;
  font-weight: bold;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    height: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
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
  padding: 1rem 3rem;

  @media (max-width: 540px) {
    font-size: 10px;
  }
`;
