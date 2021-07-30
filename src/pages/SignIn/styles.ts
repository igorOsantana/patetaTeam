import styled from 'styled-components';

import logo from '../../assets/images/logo_patetada.png';
import { shake } from '../../global/styles/global';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.aside`
  flex: 5;
  height: 45%;
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }

  button {
    margin-top: 2rem;
  }
`;

export const RightContainer = styled.aside`
  flex: 5;
  height: 45%;
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 2rem auto;
  }
`;

export const Logo = styled.div`
  flex: 5;
  background: url(${logo}) no-repeat center;
  background-size: contain;
  height: 45%;
  width: 100%;
  margin: 2rem auto;

  @media (max-width: 1024px) {
    height: 30%;
  }
`;

export const Description = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
  text-align: center;
  font-size: 1.5rem;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  h1 {
    margin-bottom: 2rem;
  }

  strong {
    white-space: nowrap;
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

export const OnlyPlayer = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme: { colors } }) => colors.white};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  border-radius: 5px;
  padding-top: 0.5rem;

  button {
    margin: 2rem 0;
    align-self: flex-end;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 3rem;
  padding: 0 2rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  outline: none;
  border-style: none;
  border-radius: 5px;
  border: 3px solid ${({ theme: { colors } }) => colors.secondary};
  background-color: ${({ theme: { colors } }) => colors.bgColor};
  color: ${({ theme: { colors } }) => colors.secondary};
  transition: all 0.3s;

  &:focus {
    color: ${({ theme: { colors } }) => colors.main};
    border-color: ${({ theme: { colors } }) => colors.main};

    &::placeholder {
      color: ${({ theme: { colors } }) => colors.main};
    }
  }

  &::placeholder {
    font-size: 0.85rem;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
  margin-left: auto;
  animation: ${shake} 0.3s;
`;
