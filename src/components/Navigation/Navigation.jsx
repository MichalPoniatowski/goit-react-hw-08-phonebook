import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
