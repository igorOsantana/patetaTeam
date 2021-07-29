import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  component: React.FC;
  path: string;
  exact?: boolean;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = props => {
  const isAuth = useAppSelector(state => state.auth.isLogged);
  return isAuth ? <Route {...props} /> : <Redirect to='/sign-in' />;
};
