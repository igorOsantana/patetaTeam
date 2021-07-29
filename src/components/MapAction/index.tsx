import { Container, Content } from './styles';

import mapMirage from '../../assets/images/map_mirage.png';
import mapDust2 from '../../assets/images/map_dust2.png';
import mapOverpass from '../../assets/images/map_overpass.png';

type MapActionProps = {
  map: 'mirage' | 'dust2' | 'overpass';
};

const maps = {
  mirage: 'Mirage',
  dust2: 'Dust II',
  overpass: 'Overpass',
};

const imageMaps = {
  mirage: mapMirage,
  dust2: mapDust2,
  overpass: mapOverpass,
};

const colorsMaps = {
  mirage: '#BA925E',
  dust2: '#2C2C2C',
  overpass: '#9B2026',
};

const colorsBorderMaps = {
  mirage: '#33A5C1',
  dust2: '#C1B58A',
  overpass: '#FBD624',
};

export const MapAction: React.FC<MapActionProps> = ({ map }) => {
  return (
    <Container color={colorsMaps[map]} borderColor={colorsBorderMaps[map]}>
      <Content>
        <img src={imageMaps[map]} alt={`${maps[map]} simbol map`} />
        <p>{maps[map]}</p>
      </Content>
    </Container>
  );
};
