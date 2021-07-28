import { Navbar } from '../Navbar';
import { Container, Body, Footer } from './styles';

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Body>{children}</Body>
      <Footer>Team Patetada - 2021 Copyright ®</Footer>
    </Container>
  );
};
