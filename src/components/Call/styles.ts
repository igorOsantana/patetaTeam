import styled from 'styled-components';
import { fadeIn } from '../../global/styles/global';

type CallStyleProps = {
  isVisible?: boolean;
};

export const Container = styled.div<CallStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: max(250px, 80vw);
  margin: 0.5rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.black};
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ theme: { colors } }) => colors.secondary};

  &:hover {
    filter: brightness(115%);
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

export const Title = styled.div<CallStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
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
  width: 95%;
  margin: 2rem auto;
  animation: ${fadeIn} 0.2s;
`;
