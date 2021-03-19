import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CryptPage } from './ui/pages/cryptPage/cryptPage';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={CryptPage} />
    </BrowserRouter>
  );
};
