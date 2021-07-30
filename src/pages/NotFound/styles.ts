import styled from 'styled-components';

type NotFoundStyleProps = {
  isPrivate?: boolean;
};

export const Container = styled.main<NotFoundStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${({ isPrivate }) => (isPrivate ? '70vh' : '100vh')};

  h1,
  svg {
    font-size: 4rem;
    color: ${({ theme: { colors } }) => colors.white};
    text-transform: capitalize;
  }

  h2 {
    color: red;
    font-size: 2rem;
  }

  svg {
    font-size: 6.5rem;
  }

  button {
    margin-top: 4rem;
  }
`;
