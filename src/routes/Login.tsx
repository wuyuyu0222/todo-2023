import { styled } from '@mui/material';
import { FC } from 'react';
import PageContainer from '../components/PageContainer';
import LoginForm from '../components/LoginForm';
import { LoginValue } from '../types/types';
import { sleep } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

const LoginBox = styled('div')({
  padding: '16px',
  marginTop: 'max(32px, 20%)',
  border: '1px solid #eeeeee',
  borderRadius: '8px',
});

const LoginTitle = styled('h1')({
  marginBottom: '32px',
});

const Login: FC = () => {
  const navigate = useNavigate();

  const onSubmit = async (value: LoginValue) => {
    console.log(value);
    await sleep(300); // 模擬登入API
    localStorage.setItem('user', value.email);
    navigate('/list');
  };

  return (
    <PageContainer>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={onSubmit} />
      </LoginBox>
    </PageContainer>
  );
};

export default Login;
