import asyncComponent from 'modules/common/components/AsyncComponent';
import React from 'react';
import { Route } from 'react-router-dom';

const Settings = asyncComponent(() =>
  import(/* webpackChunkName: "Settings" */ './components/Settings')
) as unknown as React.ComponentType;

const routes = () => (
  <Route exact={true} path="/settings" component={Settings} />
);

export default routes;
