import { ButtonHTMLAttributes } from 'react';
import { BtnDefault, BtnDefaultProps } from './styles';

type ButtonDefaultProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BtnDefaultProps;

export const ButtonDefault: React.FC<ButtonDefaultProps> = props => (
  <BtnDefault {...props} />
);
