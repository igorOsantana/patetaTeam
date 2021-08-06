import {
  Container,
  Title,
  CsgoSimbol,
  SimbolSide,
  TRSide,
  CTSide,
  ImgPlayer,
} from './styles';

import csgo_simbol from '../../assets/images/csgo_simbol.png';
import CT from '../../assets/images/CTSide.png';
import TR from '../../assets/images/TRSide.png';
import player_1 from '../../assets/images/player_1.jpg';
import player_2 from '../../assets/images/player_2.jpg';
import player_3 from '../../assets/images/player_3.jpg';
import player_4 from '../../assets/images/player_4.jpg';
import player_5 from '../../assets/images/player_5.jpg';

import { Player } from '../Player';
import { MapActionProps } from '../MapAction';

const PLAYERS: PlayerProps[] = [
  {
    id: '1',
    name: 'Igor Santana',
    nickname: 'Bourdog',
    img: player_1,
    positions: {
      maps: {
        dust2: { ct: 'mid', t: 'lurker' },
        mirage: { ct: 'short', t: 'support' },
        overpass: { ct: 'short A', t: 'support' },
      },
    },
  },
  {
    id: '2',
    name: 'Gustavo Souza',
    nickname: 'Gustagol',
    img: player_2,
    positions: {
      maps: {
        dust2: { ct: 'joker', t: '2° entry' },
        mirage: { ct: 'mid', t: 'lurker' },
        overpass: { ct: 'Joker', t: 'lurker' },
      },
    },
  },
  {
    id: '3',
    name: 'Diego Manfio',
    nickname: 'DieGod',
    img: player_3,
    positions: {
      maps: {
        dust2: { ct: 'short', t: 'awper' },
        mirage: { ct: 'connector', t: 'awper/support' },
        overpass: { ct: 'Monster', t: 'awper/support' },
      },
    },
  },
  {
    id: '4',
    name: 'Igor Delgado',
    nickname: 'Xhan',
    img: player_4,
    positions: {
      maps: {
        dust2: { ct: 'bomb B solo', t: '2° entry' },
        mirage: { ct: 'bomb B solo', t: '2° entry' },
        overpass: { ct: 'bomb A solo', t: '2° entry' },
      },
    },
  },
  {
    id: '5',
    name: 'Gabriel Tomilhero',
    nickname: 'Gazera',
    img: player_5,
    positions: {
      maps: {
        dust2: { ct: 'long fixed', t: '1° entry' },
        mirage: { ct: 'bomb A fixed', t: '1° entry' },
        overpass: { ct: 'bomb B fixed', t: '1° entry' },
      },
    },
  },
];

type PlayerProps = {
  id: string;
  name: string;
  nickname: string;
  img: string;
  positions: {
    maps: {
      dust2: { ct: string; t: string };
      mirage: { ct: string; t: string };
      overpass: { ct: string; t: string };
    };
  };
  [index: string]: any;
};

type PositionsProps = MapActionProps & {
  map_image: string;
};

export const Positions: React.FC<PositionsProps> = ({ map, map_image }) => {
  return (
    <Container>
      <Title>
        <h1>Positions</h1>
        <img src={map_image} alt={`${map} simbol map`} />
      </Title>
      <table>
        <thead>
          <tr>
            <th>
              <CsgoSimbol>
                <img src={csgo_simbol} alt='csgo simbol' />
              </CsgoSimbol>
            </th>
            <th>
              <SimbolSide>
                <img src={TR} alt='t simbol' />
              </SimbolSide>
            </th>
            <th>
              <SimbolSide>
                <img src={CT} alt='ct simbol' />
              </SimbolSide>
            </th>
          </tr>
        </thead>
        <tbody>
          {PLAYERS.map(player => (
            <tr key={player.id}>
              <td>
                <ImgPlayer>
                  <Player image={player.img} />
                </ImgPlayer>
              </td>
              <td>
                <TRSide>{player.positions.maps[map].t}</TRSide>
              </td>
              <td>
                <CTSide>{player.positions.maps[map].ct}</CTSide>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
