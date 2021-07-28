import styled from 'styled-components';

import backgroundGetStarted from '../../assets/images/logo_patetada.png';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100vw;
  height: 80vh;
  background: url(${backgroundGetStarted}) no-repeat center;
  background-size: contain;
  opacity: 0.25;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60%;
  border-radius: 1rem;
  padding: 1rem 3rem;
`;

export const Description = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.white};

  p {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;
