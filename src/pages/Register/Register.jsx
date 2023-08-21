import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isUserLoged } from '../../redux/auth/selectors';

import { Register } from '../../components/Register';

export const RegisterPage = () => {
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
    <div>
      <h1>Register user:</h1>
      <Register />
    </div>
  );
};
