import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Link,
  Header,
  Container,
  RegisterMenuContainer,
} from './Navigation.styled';
import { Loader } from '../Loader';
import { isUserLoged } from '../../redux/auth/selectors';
import { UserMenu } from '../UserMenu';

export const Navigation = () => {
  const userIsLogged = useSelector(isUserLoged);
  const navigate = useNavigate();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (userIsLogged && !hasRedirected) {
      navigate('/contacts');
      setHasRedirected(true);
    }
    if (!userIsLogged) {
      setHasRedirected(false);
    }
  }, [userIsLogged, navigate, hasRedirected]);

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>

          {userIsLogged ? (
            <UserMenu />
          ) : (
            <RegisterMenuContainer>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </RegisterMenuContainer>
          )}
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
