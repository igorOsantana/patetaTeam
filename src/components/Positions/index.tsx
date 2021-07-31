import { Container, TRSide, CTSide } from './styles';

import CT from '../../assets/images/CTSide.png';
import TR from '../../assets/images/TRSide.png';
import player_1 from '../../assets/images/player_1.jpg';
import player_2 from '../../assets/images/player_2.jpg';
import player_3 from '../../assets/images/player_3.jpg';
import player_4 from '../../assets/images/player_4.jpg';
import player_5 from '../../assets/images/player_5.jpg';

import { Player } from '../Player';

const PLAYERS = [
  {
    id: 1,
    name: 'Igor Santana',
    nickname: 'Bourdog',
    img: player_1,
    positions: {
      maps: {
        dust2: { ct: 'mid', t: 'lurker' },
        mirage: { ct: 'short', t: 'support' },
      },
    },
  },
  {
    id: 2,
    name: 'Gustavo Souza',
    nickname: 'Gustagol',
    img: player_2,
    positions: {
      maps: {
        dust2: { ct: 'joker', t: '2° entry' },
        mirage: { ct: 'mid', t: 'lurker' },
      },
    },
  },
  {
    id: 3,
    name: 'Diego Manfio',
    nickname: 'DieGod',
    img: player_3,
    positions: {
      maps: {
        dust2: { ct: 'short', t: 'awper' },
        mirage: { ct: 'connection', t: 'awper/support' },
      },
    },
  },
  {
    id: 4,
    name: 'Igor Delgado',
    nickname: 'Xhan',
    img: player_4,
    positions: {
      maps: {
        dust2: { ct: 'bomb B solo', t: '2° entry' },
        mirage: { ct: 'bomb B solo', t: '2° entry' },
      },
    },
  },
  {
    id: 5,
    name: 'Gabriel Tomilhero',
    nickname: 'Gazera',
    img: player_5,
    positions: {
      maps: {
        dust2: { ct: 'long fixed', t: '1° entry' },
        mirage: { ct: 'bomb A fixed', t: '1° entry' },
      },
    },
  },
];

export const Positions: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>*</th>
            <th>
              <img src={CT} alt='ct simbol' />
            </th>
            <th>
              <img src={TR} alt='t simbol' />
            </th>
          </tr>
        </thead>
        <tbody>
          {PLAYERS.map(player => (
            <tr key={player.id}>
              <td>
                <Player image={player.img} />
              </td>
              <td>{player.positions.maps.dust2.ct}</td>
              <td>{player.positions.maps.dust2.t}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TRSide>
        <Player image={player_3} />
      </TRSide>
      <CTSide>
        <Player image={player_2} />
        <Player image={player_5} />
      </CTSide>
    </Container>
  );
};
