import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { ParamsRoute } from '../../App';
import { ContainerCalls } from '../../components/ContainerCalls';
import { imageMaps } from '../../components/MapAction';
import { Positions } from '../../components/Positions';
import { NotFound } from '../NotFound';
import { Container } from './styles';

export const TacticalMap: React.FC = () => {
  const [addAnimation, setAddAnimation] = useState(true);

  const { map: mapName } = useParams<ParamsRoute>();
  const notFoundMapData = imageMaps.hasOwnProperty(mapName) === false;

  useEffect(() => {
    const time = setTimeout(() => {
      setAddAnimation(false);
    }, 350);

    return () => {
      clearTimeout(time);
      setAddAnimation(true);
    };
  }, [mapName]);

  return (
    <>
      {notFoundMapData ? (
        <NotFound page={mapName} title='map' privateRoute />
      ) : (
        <Container animation={addAnimation}>
          <Positions map={mapName} map_image={imageMaps[mapName]} />
          <ContainerCalls map={mapName} />
        </Container>
      )}
    </>
  );
};
