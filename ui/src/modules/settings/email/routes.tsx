import asyncComponent from 'modules/common/components/AsyncComponent';
import React from 'react';
import { Route } from 'react-router-dom';

const List = asyncComponent(() =>
  import(/* webpackChunkName: "Settings - List Email" */ './containers/List')
) as unknown as React.ComponentType;

const routes = () => (
  <React.Fragment>
    <Route
      key="/settings/emails/"
      exact={true}
      path="/settings/emails/"
      component={List}
    />
  </React.Fragment>
);

export default routes;
