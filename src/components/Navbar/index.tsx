import { useEffect, useState } from 'react';
import { removeToken } from '../../services/auth';
import { useAppDispatch } from '../../hooks';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../store/slices/authSlice';
import { ExitToApp, Dashboard, AccountBox, People } from '@material-ui/icons';

import backgroundGetStarted from '../../assets/images/logo_patetada.png';
import { Container, Nav, NavToggle } from './styles';

export const Navbar: React.FC = () => {
  const [showNavToggle, setShowNavToggle] = useState(false);

  const {
    location: { pathname },
  } = useHistory();
  const dispatch = useAppDispatch();

  const handleToggle = () => setShowNavToggle(prevState => !prevState);

  const handleCloseMenu = () => setShowNavToggle(false);

  const handleLogOut = () => {
    removeToken();
    dispatch(logOut());
  };

  useEffect(() => {
    if (showNavToggle) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [pathname, showNavToggle]);

  return (
    <Container onShowMenu={showNavToggle}>
      <div>
        <NavLink to='/dashboard'>
          <img src={backgroundGetStarted} alt="team's logo brand" />
        </NavLink>
      </div>
      <Nav onShowMenu={showNavToggle}>
        <ul>
          <li onClick={handleCloseMenu}>
            <NavLink to='/dashboard' activeClassName='selected'>
              <Dashboard />
              Dashboard
            </NavLink>
          </li>
          <li onClick={handleCloseMenu}>
            <NavLink to='/team' activeClassName='selected'>
              <People />
              Team
            </NavLink>
          </li>
          <li onClick={handleCloseMenu}>
            <NavLink to='/profile' activeClassName='selected'>
              <AccountBox />
              Profile
            </NavLink>
          </li>
          <li onClick={handleLogOut}>
            <p>
              Log Out
              <ExitToApp />
            </p>
          </li>
        </ul>
      </Nav>
      <NavToggle onShowMenu={showNavToggle} onClick={handleToggle}>
        <div className='one' />
        <div className='two' />
        <div className='three' />
      </NavToggle>
    </Container>
  );
};
