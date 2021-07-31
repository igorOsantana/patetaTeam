import { Container } from './styles';

export type PlayerProps = {
  image: string;
};

export const Player: React.FC<PlayerProps> = ({ image }) => {
  return <Container image={image} />;
};
