import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 4.5rem;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.main};
`;

export const Nav = styled.nav`
  width: 100%;

  .selected {
    color: ${({ theme: { colors } }) => colors.main};
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    color: ${({ theme: { colors } }) => colors.white};
    list-style: none;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      filter: brightness(75%);
    }
  }
`;
