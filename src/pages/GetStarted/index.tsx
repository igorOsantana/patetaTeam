import { useHistory } from 'react-router-dom';

import { ButtonDefault } from '../../components/ButtonDefault';
import {
  Background,
  Container,
  Content,
  Description,
  ButtonContainer,
} from './styles';

export const GetStarted: React.FC = () => {
  const history = useHistory();

  const handleButtonGetStarted = () => history.push('/sign-in');

  return (
    <Container>
      <Background />
      <Content>
        <Description>
          <p>
            &emsp;&emsp;<strong>Team Patetada</strong> is an amateur team
            esports organization founded in the Assis, Brazil since 2021.
            Originally created by friends to participate in a local tournament,
            the team started to show it's own potential, and{' '}
            <strong>became one of the most hopeless teams</strong>.
          </p>
        </Description>
        <ButtonContainer>
          <ButtonDefault onClick={handleButtonGetStarted}>
            Get Started
          </ButtonDefault>
        </ButtonContainer>
      </Content>
    </Container>
  );
};
