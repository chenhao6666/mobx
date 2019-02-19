import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncRouter from '../../util/asyncRouter';
const index = asyncRouter(() => import('./NameSpace'));

const Index  = () => (
  <Switch>
    <Route exact path= "/nameSpace" component={index} />
  </Switch>
);

export default Index;