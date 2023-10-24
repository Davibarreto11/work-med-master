import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { store } from '../store';

function PrivateUnsigned() {
  const { signed } = store.getState().auth;

  if (!signed) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PrivateUnsigned;
