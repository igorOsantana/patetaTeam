import grenade_flashbang from '../../assets/images/grenade_flashbang.png';
import grenade_smoke from '../../assets/images/grenade_smoke.png';
import grenade_he from '../../assets/images/grenade_he.png';
import grenade_molotov from '../../assets/images/grenade_molotov.png';

import { Container, Number } from './styles';

type GrenadeProps = {
  type: 'flashbang' | 'smoke' | 'he' | 'molotov';
  amount: number;
};

const grenades = {
  flashbang: grenade_flashbang,
  smoke: grenade_smoke,
  he: grenade_he,
  molotov: grenade_molotov,
};

export const Grenade: React.FC<GrenadeProps> = ({ type, amount }) => {
  return (
    <Container>
      <img src={grenades[type]} alt={`Grenade ${type}`} />
      <Number>{amount}</Number>
    </Container>
  );
};
