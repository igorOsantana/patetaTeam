import { Redirect, Route, useHistory } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  component: React.FC;
  path: string;
  exact?: boolean;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  const {
    location: { pathname },
  } = useHistory();
  const isAuth = useAppSelector((state) => state.auth.isLogged);
  return isAuth ? (
    <Route {...props} />
  ) : pathname === '/sign-in' ? (
    <Redirect to='/' />
  ) : (
    <Redirect to='/sign-in' />
  );
};
