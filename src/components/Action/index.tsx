import { useHistory } from 'react-router';
import { Container, Content } from './styles';
import { SpeakerNotes } from '@material-ui/icons';

type ActionProps = {
  title: string;
  tactical?: boolean;
};

export const Action: React.FC<ActionProps> = ({ title }) => {
  const history = useHistory();

  const handleActionClick = () => history.push('/dashboard/tactical/maps');

  return (
    <Container onClick={handleActionClick}>
      <Content>
        <SpeakerNotes />
        <p>{title}</p>
      </Content>
    </Container>
  );
};
