import { Container, Nav } from './styles';

import backgroundGetStarted from '../../assets/images/logo_patetada.png';
import { useAppDispatch } from '../../hooks';
import { logOut } from '../../store/slices/authSlice';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

export const Navbar: React.FC = () => {
  const {
    push,
    location: { pathname },
  } = useHistory();
  const dispatch = useAppDispatch();

  const handleDashboard = () => push('/dashboard');

  const handleMyProfile = () => push('/profile');

  const handleAllPlayers = () => push('/allplayers');

  const handleLogOut = () => dispatch(logOut());

  useEffect(() => {
    const currentUrl = pathname.replace('/', '');
    const regex = new RegExp(`${currentUrl}`, 'gmi');
    const removeWhiteSpace = /\s/g;
    const liElementList = document.querySelectorAll('[data-js="navbar"]');

    liElementList.forEach(li => {
      if (li.textContent?.replace(removeWhiteSpace, '').match(regex))
        li.classList.add('selected');
      else li.classList.remove('selected');
    });
  }, [pathname]);

  return (
    <Container>
      <Nav>
        <ul>
          <li onClick={handleDashboard}>
            <img
              src={backgroundGetStarted}
              alt="team's logo brand"
              width={60}
            />
          </li>
          <li data-js='navbar' onClick={handleDashboard}>
            Dashboard
          </li>
          <li data-js='navbar' onClick={handleMyProfile}>
            My Profile
          </li>
          <li data-js='navbar' onClick={handleAllPlayers}>
            All Players
          </li>
          <li onClick={handleLogOut}>Log Out</li>
        </ul>
      </Nav>
    </Container>
  );
};
