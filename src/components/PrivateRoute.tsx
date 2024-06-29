import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useStore } from '../store';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const { user } = useStore();
  const location = useLocation();

  return user ? (
    <Component />
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

export default PrivateRoute;
