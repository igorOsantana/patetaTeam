import { Call } from '../Call';
import { Container, Header, Body } from './styles';

const CALLS = [
  {
    id: 1,
    map: 'dust2',
    title: 'Fake mid, exec short and finish A',
    call: {
      description: '',
      players: {
        1: {
          shouldDo: 'Throw smoke on CT spawn, molly bombside A and 2 flash to starts the execution on short.',
          grenades: { he: 0, flashbang: 2, motolov: 1, smoke: 1 },
        },
        2: {
          shouldDo: 'Throws ',
          grenades: { he: 0, flashbang: 0, motolov: 0, smoke: 0 },
        },
        3: {
          shouldDo: '',
          grenades: { he: 0, flashbang: 0, motolov: 0, smoke: 0 },
        },
        4: {
          shouldDo: '',
          grenades: { he: 0, flashbang: 0, motolov: 0, smoke: 0 },
        },
        5: {
          shouldDo: '',
          grenades: { he: 0, flashbang: 0, motolov: 0, smoke: 0 },
        },
      },
    },
  },
  { id: 2, map: 'dust2', title: 'Take short, fake long and finish split B' },
  { id: 3, map: 'mirage', title: 'Take mid, exec split A and finish B' },
  { id: 4, map: 'mirage', title: 'Faster exec A, take CT spawn after plant' },
  { id: 5, map: 'overpass', title: 'Take connector and toilets, finish B' },
];

type ContainerCallProps = {
  map: string;
};

export const ContainerCalls: React.FC<ContainerCallProps> = ({ map }) => {
  return (
    <Container>
      <Header>
        <h1>Calls</h1>
      </Header>
      <Body>
        {CALLS.filter(call => call.map === map).map(call => (
          <Call title={call.title} key={call.id} />
        ))}
      </Body>
    </Container>
  );
};
