import { ArrowForward } from '@material-ui/icons';
import { Container, Header, Body, Call, Title } from './styles';

type CallsProps = {
  map_image: string;
  map_name: string;
};

const CALLS = [
  { title: 'Fake mid, exec short and finish A ' },
  { title: 'Fake mid, exec short and finish A ' },
  { title: 'Fake mid, exec short and finish A ' },
  { title: 'Fake mid, exec short and finish A ' },
  { title: 'Fake mid, exec short and finish A ' },
];

export const Calls: React.FC<CallsProps> = ({ map_image, map_name }) => {
  return (
    <Container>
      <Header>
        <h1>Calls</h1>
        <img src={map_image} alt={`${map_name} simbol map`} />
      </Header>
      <Body>
        {CALLS.map((call) => (
          <Call>
            <Title>
              <h1>{call.title}</h1>
              <ArrowForward />
            </Title>
          </Call>
        ))}
      </Body>
    </Container>
  );
};
