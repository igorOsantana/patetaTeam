import { Call } from '../Call';
import { Container, Header, Body } from './styles';

type CallsProps = {
  map_image: string;
  map_name: string;
};

const CALLS = [
  { id: 1, title: 'Fake mid, exec short and finish A ' },
  { id: 2, title: 'Fake mid, exec short and finish A ' },
  { id: 3, title: 'Fake mid, exec short and finish A ' },
  { id: 4, title: 'Fake mid, exec short and finish A ' },
  { id: 5, title: 'Fake mid, exec short and finish A ' },
];

export const ContainerCalls: React.FC<CallsProps> = ({
  map_image,
  map_name,
}) => {
  return (
    <Container>
      <Header>
        <h1>Calls</h1>
        <img src={map_image} alt={`${map_name} simbol map`} />
      </Header>
      <Body>
        {CALLS.map(call => (
          <Call title={call.title} key={call.id} />
        ))}
      </Body>
    </Container>
  );
};
