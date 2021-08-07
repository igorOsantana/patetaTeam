import { Call } from '../Call';
import { Container, Header, Body } from './styles';

const CALLS = [
  {
    id: 1,
    map: 'dust2',
    title: 'Fake meio, exec varanda/CT e finaliza A',
    call: {
      description:
        'Dominar escuro baixo e depois dominar varanda enquanto marca o avanço fundo. Finge exec meio B e faz exec varanda caindo CT também.',
      players: {
        1: {
          shouldDo:
            'Joga smoke no CT, molotova rampa e faz a flash da entrada e mais uma atrasada.',
          grenades: { he: 0, flashbang: 2, motolov: 1, smoke: 1 },
        },
        2: {
          shouldDo:
            'Flash tabelada varanda para dominar, smoke na mureta da entrada da varanda e flash para entrada.',
          grenades: { he: 0, flashbang: 2, motolov: 0, smoke: 1 },
        },
        3: {
          shouldDo: 'Domina escuro baixo, molotova varanda, finge exec meio B.',
          grenades: { he: 0, flashbang: 2, motolov: 1, smoke: 1 },
        },
        4: {
          shouldDo: 'Smoke caixa gorda e lurkeia fundo guardando granadas.',
          grenades: { he: 0, flashbang: 2, motolov: 1, smoke: 1 },
        },
        5: {
          shouldDo:
            'Flash em cima do escuro baixo, flash inicio da varanda, molotov bomb A e faz o entry.',
          grenades: { he: 0, flashbang: 2, motolov: 1, smoke: 0 },
        },
      },
    },
  },
  {
    id: 2,
    map: 'mirage',
    title: 'Exec bomb B rápido',
    call: {
      description:
        'Cada jogar se posiciona perante sua função de forma rápida, será um rush B organizado.',
      players: {
        1: {
          shouldDo: 'Smoke arco direito do L, 2 flash atrasadas para entrada.',
          grenades: { he: 0, flashbang: 2, motolov: 0, smoke: 1 },
        },
        2: {
          shouldDo:
            'Smoke arco esquerdo do L, 2 flash atrasadas para entrada. ',
          grenades: { he: 0, flashbang: 2, motolov: 0, smoke: 1 },
        },
        3: {
          shouldDo:
            'Molotova sombra, uma flash janela e usa smoke para after plant.',
          grenades: { he: 0, flashbang: 1, motolov: 1, smoke: 1 },
        },
        4: {
          shouldDo: 'Segundo entry, smoke na mão para apagar molotov.',
          grenades: { he: 0, flashbang: 0, motolov: 0, smoke: 1 },
        },
        5: {
          shouldDo: 'Primeiro entry, molotova van, flash janela e pula janela.',
          grenades: { he: 0, flashbang: 1, motolov: 1, smoke: 0 },
        },
      },
    },
  },
  {
    id: 3,
    map: 'overpass',
    title: 'Dominio rua/ligação/esgoto e exec A.',
    call: {
      description:
        '3 rua, 1 liga e 1 sapão. Faz os dominios em dupla com granada e depois finaliza A.',
      players: {
        1: {
          shouldDo:
            'Flash rua para dominio, combinar HE combada. Na exec faz smoke banco e flash para entrada.',
          grenades: { he: 1, flashbang: 1, motolov: 1, smoke: 1 },
        },
        2: {
          shouldDo:
            'Flash fundo e rua para dominio, molotov banheiro. Guarda smoke after plant',
          grenades: { he: 0, flashbang: 2, motolov: 1, smoke: 1 },
        },
        3: {
          shouldDo:
            'Molotov escada liga, 1 flash para dominio esgoto. Na exec smoke lixeira e flash para entrada.',
          grenades: { he: 0, flashbang: 2, motolov: 1, smoke: 1 },
        },
        4: {
          shouldDo:
            'Holda sapão, flash esgoto para dominio. Antes da exec, faz qualquer smoke na B.',
          grenades: { he: 0, flashbang: 2, motolov: 0, smoke: 1 },
        },
        5: {
          shouldDo:
            'Smoke porta banheiro, HE parquinho, flash rua e faz o entry.',
          grenades: { he: 1, flashbang: 1, motolov: 0, smoke: 1 },
        },
      },
    },
  },
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
          <Call
            key={call.id}
            id={call.id}
            map={call.map}
            title={call.title}
            call={call.call}
          />
        ))}
      </Body>
    </Container>
  );
};
