import { useHistory } from 'react-router';
import { ButtonDefault } from '../../components/ButtonDefault';
import { Container } from './styles';
import { SentimentVeryDissatisfied } from '@material-ui/icons';

type NotFoundProps = {
  page: string;
  title: string;
  privateRoute?: boolean;
};

export const NotFound: React.FC<NotFoundProps> = ({
  page,
  title,
  privateRoute,
}) => {
  const { goBack } = useHistory();

  const handleGoback = () => goBack();
  return (
    <Container isPrivate={privateRoute}>
      <h1>{title} not found</h1>
      <h2>
        {title}: {page}
      </h2>
      <br />
      <SentimentVeryDissatisfied />
      <ButtonDefault onClick={handleGoback}>Back</ButtonDefault>
    </Container>
  );
};
