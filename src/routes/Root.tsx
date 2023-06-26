import { Container } from '@mui/material';
import { FC, useEffect } from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { globalLoadingAtom, userAtom } from '../states/atom';

const Root: FC = () => {
  const [user, setUser] = useRecoilState(userAtom);
  const setGlobalLoading = useSetRecoilState(globalLoadingAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const storageUser = localStorage.getItem('user');
    setUser(storageUser || '');
  }, [setUser]);

  useEffect(() => {
    if (user !== undefined) {
      setGlobalLoading(false);
    }
    if (user) {
      navigate('/list');
    } else {
      navigate('/login');
    }
  }, [user, navigate, setGlobalLoading]);

  return (
    <Container component="main" maxWidth="sm">
      <div style={{ height: '100vh' }}>
        <Outlet />
      </div>
    </Container>
  );
};

export default Root;
