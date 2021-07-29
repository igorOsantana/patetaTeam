import { useHistory } from 'react-router';
import { Container, Content } from './styles';

import tactical_simbol from '../../assets/images/tatic_simbol.png';

type ActionProps = {
  title: string;
  tactical?: boolean;
};

export const Action: React.FC<ActionProps> = ({ title }) => {
  const history = useHistory();

  const handleActionClick = () => history.push('/dashboard/map-action');

  return (
    <Container onClick={handleActionClick}>
      <Content>
        <img src={tactical_simbol} alt='tactical simbol' />
        <p>{title}</p>
      </Content>
    </Container>
  );
};
