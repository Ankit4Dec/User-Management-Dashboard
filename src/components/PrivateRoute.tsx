import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from '../store';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useStore();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;