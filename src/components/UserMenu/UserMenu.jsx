import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../redux/auth/actions';
import { userName } from '../../redux/auth/selectors';
import {
  StyledLink,
  UserButton,
  UserMenuContainer,
  UserInfo,
} from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <UserMenuContainer>
      <StyledLink to="/contacts">Contacts</StyledLink>
      <UserInfo>Welcome: {user}</UserInfo>
      <UserButton type="button" onClick={handleLogout}>
        Logout
      </UserButton>
    </UserMenuContainer>
  );
};
