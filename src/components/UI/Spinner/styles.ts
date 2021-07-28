import styled, { keyframes } from 'styled-components';

export type SpinnerProps = {
  secondary?: boolean;
  small?: boolean;
};

const rotate = keyframes`
  to { transform: rotate( 360deg ); }
`;

export const Container = styled.div<SpinnerProps>`
  display: flex;
  justify-content: center;
  margin: ${({ small }) => (small ? 'auto' : '1.5rem 0')};
  & div {
    border: ${({ small }) => (small ? '2px' : '5px')} solid
      ${({ theme: { colors } }) => colors.white};
    border-left-color: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.secondary : colors.main};
    border-radius: 50%;
    width: ${({ small }) => (small ? '1.25rem' : '2.5rem')};
    height: ${({ small }) => (small ? '1.25rem' : '2.5rem')};
    animation: ${rotate} 1s linear infinite;
  }
`;
