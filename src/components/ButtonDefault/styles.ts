import styled from 'styled-components';

export type BtnDefaultProps = {
  bgColor?: string;
  color?: string;
  main?: boolean;
  secondary?: boolean;
};

export const BtnDefault = styled.button<BtnDefaultProps>`
  min-width: 10rem;
  padding: 0.75rem 2rem;
  border: 3px solid
    ${({ main, secondary, theme: { colors } }) =>
      main ? colors.main : secondary ? colors.secondary : colors.white};
  border-radius: 3px;
  color: ${({ main, secondary, theme: { colors } }) =>
    main ? colors.main : secondary ? colors.secondary : colors.white};
  font-size: 1rem;
  font-weight: bold;
  background-color: transparent;
  transition: all 0.3s;

  &:hover {
    color: ${({ main, theme: { colors } }) =>
      main ? colors.white : colors.black};
    background-color: ${({ main, secondary, theme: { colors } }) =>
      main ? colors.main : secondary ? colors.secondary : colors.white};
    border-color: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.secondary : null};
  }
`;
