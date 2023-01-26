import React from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';

function PageBody() {
  const location = useLocation();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <h1 style={{ marginTop: 200 }}>{location.pathname}</h1>{' '}
    </div>
  );
}

export default PageBody;
