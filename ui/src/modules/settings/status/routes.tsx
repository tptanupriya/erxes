import asyncComponent from 'modules/common/components/AsyncComponent';
import React from 'react';
import { Route } from 'react-router-dom';

const Status = asyncComponent(() =>
  import(/* webpackChunkName: "Settings Status" */ './containers/Status')
) as unknown as React.ComponentType;

const routes = () => (
  <Route exact={true} path="/settings/status/" component={Status} />
);

export default routes;
