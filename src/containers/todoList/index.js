
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncRouter from '../../util/asyncRouter';
const index = asyncRouter(() => import('./TodoList'), {
  TodoListStore: () => import('../../store/todo-list'),
});

const Index  = ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={index} />
  </Switch>
);

export default Index;
