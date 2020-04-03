import React from 'react';
import Routes from './src/routes';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  return <Routes />;
}

// importando intl, pois no mobile não tem por padrão. (npm intl)
