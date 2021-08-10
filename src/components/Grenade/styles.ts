import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  img {
    width: min(2rem, 4vw);
    margin: 1rem 0.5rem;
  }
  margin: 0 0.25rem;
`;

export const Number = styled.span`
  position: absolute;
  top: 55%;
  right: -2px;
  font-size: 0.85rem;
  color: ${({ theme: { colors } }) => colors.secondary};
  z-index: 50;
`;
