import { styled } from '@mui/material';
import { FC } from 'react';
import PageContainer from '../components/PageContainer';
import LoginForm from '../components/LoginForm';
import { LoginValue } from '../types/types';

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
  const onSubmit = async (value: LoginValue) => {
    console.log(value);
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
