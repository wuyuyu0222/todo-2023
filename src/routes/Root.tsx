import { Container } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router';

const Root: FC = () => {
  return (
    <Container component="main" maxWidth="sm">
      <div style={{ height: '100vh' }}>
        <Outlet />
      </div>
    </Container>
  );
};

export default Root;
