import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Contacts, Home, LoginPage, RegisterPage, NotFound } from '../pages';
import { Navigation } from './Navigation';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
