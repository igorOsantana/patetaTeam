import { useParams } from 'react-router';
import { ParamsRoute } from '../../App';
import { imageMaps } from '../../components/MapAction';
import { NotFound } from '../NotFound';
import { Container, Header, Body } from './styles';

export const TacticalMap: React.FC = () => {
  const { map: map_name } = useParams<ParamsRoute>();
  const notFoundMapData = imageMaps.hasOwnProperty(map_name) === false;
  return (
    <>
      {notFoundMapData ? (
        <NotFound page={map_name} title='map' privateRoute />
      ) : (
        <Container>
          <Header>
            <h1>{map_name === 'dust2' ? 'Dust II' : map_name}</h1>
            <img
              src={imageMaps[map_name]}
              alt={`${imageMaps[map_name]} simbol map`}
            />
          </Header>
          <Body></Body>
        </Container>
      )}
    </>
  );
};
