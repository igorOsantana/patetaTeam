import { Route } from 'react-router';

import { Action } from '../../components/Action';
import { Layout } from '../../components/Layout';
import { MapAction } from '../../components/MapAction';
import { TacticalMap } from '../TacticalMap';

import { Container, TitlePage, MapTabsContainer } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Route path='/dashboard' exact>
          <Action title='Tactical' />
        </Route>
        <Route path='/dashboard/tactical/maps'>
          <TitlePage>
            <h1>Tactical</h1>
          </TitlePage>
          <MapTabsContainer>
            <MapAction map='dust2' />
            <MapAction map='mirage' />
            <MapAction map='overpass' />
          </MapTabsContainer>
        </Route>
        <Route path='/dashboard/tactical/maps/:map' exact>
          <TacticalMap />
        </Route>
      </Container>
    </Layout>
  );
};
