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
  width: max(250px, 95%);
  margin: 0.5rem;
  padding: 2rem;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.black};
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.secondary};
  transition: all 0.25s;

  &:hover {
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
  color: ${({ theme: { colors } }) => colors.white};
  animation: ${fadeIn} 0.2s;
`;
