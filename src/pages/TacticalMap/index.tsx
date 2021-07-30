import { useParams } from 'react-router';
import { ParamsRoute } from '../../App';
import { Calls } from '../../components/Calls';
import { imageMaps } from '../../components/MapAction';
import { Positions } from '../../components/Positions';
import { NotFound } from '../NotFound';
import { Container } from './styles';

export const TacticalMap: React.FC = () => {
  const { map: mapName } = useParams<ParamsRoute>();
  const notFoundMapData = imageMaps.hasOwnProperty(mapName) === false;
  return (
    <>
      {notFoundMapData ? (
        <NotFound page={mapName} title='map' privateRoute />
      ) : (
        <Container>
          <Calls map_image={imageMaps[mapName]} map_name={mapName} />
        </Container>
      )}
    </>
  );
};
