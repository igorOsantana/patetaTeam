import { Route } from 'react-router';
import { Action } from '../../components/Action';
import { Layout } from '../../components/Layout';
import { MapAction } from '../../components/MapAction';
import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Route path='/dashboard' exact>
        <Action title='Tactical' />
      </Route>
      <Route path='/dashboard/map-action' exact>
        <MapAction map='dust2' />
        <MapAction map='mirage' />
        <MapAction map='overpass' />
      </Route>
    </Layout>
  );
};
