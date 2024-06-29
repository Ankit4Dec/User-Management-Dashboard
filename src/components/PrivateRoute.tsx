import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../store';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  path?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useStore();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
