import { FC, useState } from 'react';
import { LoginValue } from '../types/types';
import { Box, Button, TextField, styled } from '@mui/material';

const FormBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '32px',
});

const InputContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  marginBottom: '32px',
  width: '320px',
  '&& .MuiTextField-root': {
    width: '100%',
  },
});

const ErrorMessage = styled('span')({
  marginTop: '4px;',
  color: '#D85B50',
});

const SubmitButton = styled(Button)({
  marginTop: '32px',
  alignSelf: 'center',
  width: '240px',
});

interface LoginFormProps {
  onSubmit: (_value: LoginValue) => Promise<void>;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onFormSubmit = () => {
    console.log('onFormSubmit', email, password);
    props.onSubmit({ email, password });
  };

  return (
    <FormBox>
      <InputContainer>
        <TextField
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ErrorMessage>error</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <TextField
          label="Password"
          variant="standard"
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ErrorMessage></ErrorMessage>
      </InputContainer>
      <SubmitButton onClick={onFormSubmit}>Submit</SubmitButton>
    </FormBox>
  );
};

export default LoginForm;
