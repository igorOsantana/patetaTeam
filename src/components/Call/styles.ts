import styled from 'styled-components';

type CallStyleProps = {
  isVisible?: boolean;
};

export const Container = styled.div<CallStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: max(250px, 95%);
  margin: 0.5rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.black};
  color: ${({ theme: { colors } }) => colors.secondary};

  .showCall-enter {
    opacity: 0.1;
    filter: blur(5px);
  }
  .showCall-enter-active {
    opacity: 1;
    filter: blur(0px);
  }
  .showCall-exit {
    opacity: 0.1;
    filter: blur(5px);
  }
  .showCall-exit-active {
    opacity: 0;
    filter: blur(10px);
  }
`;

export const Title = styled.div<CallStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    svg {
      color: ${({ theme: { colors } }) => colors.white};
    }
  }

  h1 {
    font-size: 2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  svg {
    transition: all 0.2s;
    font-size: 3rem;
    transform: rotate(${({ isVisible }) => (isVisible ? '90deg' : '0deg')});
  }
`;

export const HiddenContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  padding: 1rem;
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 5px;
  transition: all 0.35s;
  background-color: ${({ theme: { colors } }) => colors.bgColor};
`;

export const Description = styled.div`
  text-align: left;
  margin-bottom: 1rem;
  flex: 2;

  span {
    color: ${({ theme: { colors } }) => colors.main};
    font-size: min(1.75rem, 4vw);
    text-transform: uppercase;
  }
  p {
    margin: 10px 20px;
    font-size: min(1.5rem, 3vw);
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const PlayerContent = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin: 0.5rem 3rem;
  flex: 1;

  p {
    flex: 1;
    color: ${({ theme: { colors } }) => colors.secondary};
    margin: 0px 20px;
    font-style: italic;
  }
`;
