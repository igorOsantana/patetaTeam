import styled from 'styled-components';

type MapActionProps = {
  color: string;
  borderColor: string;
  selected: boolean;
};

export const Container = styled.div<MapActionProps>`
  flex: 1;
  height: 4rem;
  max-width: 15rem;
  border-radius: 5px;
  border-bottom: 3px solid ${({ borderColor }) => borderColor};
  padding: 1rem 1.5rem 1rem 1rem;
  margin: 1rem;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ color }) => color};
  cursor: pointer;
  transition: all 0.3s;
  transform: scale(${({ selected }) => (selected ? 1.1 : 1)});

  @media (max-width: 700px) {
    margin: 0.5rem 0.75rem;
    padding: 1rem;
  }

  &:hover {
    filter: brightness(85%);
  }
  &:active {
    filter: brightness(50%);
    transform: translateY(2px);
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 480px) {
    justify-content: center;
  }

  img {
    width: 3rem;
  }

  p {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 2rem;
    white-space: nowrap;

    @media (max-width: 480px) {
      display: none;
    }
  }
`;
