import { Container, SpinnerProps } from './styles';

export const Spinner: React.FC<SpinnerProps> = props => {
  return (
    <Container {...props}>
      <div />
    </Container>
  );
};
