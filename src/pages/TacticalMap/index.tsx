import { useParams } from 'react-router';
import { ParamsRoute } from '../../App';
import { ContainerCalls } from '../../components/ContainerCalls';
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
          <ContainerCalls map_image={imageMaps[mapName]} map_name={mapName} />
        </Container>
      )}
    </>
  );
};
