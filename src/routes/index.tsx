import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Poker from '../pages/poker';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Poker} />
  </Switch>
);

export default Routes;
