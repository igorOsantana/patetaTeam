import { Container } from './styles';

export type PlayerProps = {
  image: string;
  colorMain?: boolean;
  colorSecondary?: boolean;
};

export const Player: React.FC<PlayerProps> = props => {
  return <Container {...props} />;
};
