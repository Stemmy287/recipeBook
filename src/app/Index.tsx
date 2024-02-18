import React from 'react';

import './index.module.scss';

import { Router } from 'app/Router';

import { Header } from 'shared/ui';

export function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}
