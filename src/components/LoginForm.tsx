import { FC } from 'react';
import { LoginValue } from '../types/types';
import { Box, Button, TextField, styled } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
  minHeight: '24px',
  color: '#D85B50',
});

const SubmitButton = styled(Button)({
  marginTop: '32px',
  alignSelf: 'center',
  width: '240px',
});

const validationScheme = yup.object({
  email: yup.string().email('請輸入正確的Email').required('請輸入Email'),
  password: yup
    .string()
    .min(8, '請輸入8~20字元')
    .max(20, '請輸入8~20字元')
    .required('請輸入密碼'),
});

interface LoginFormProps {
  onSubmit: (_value: LoginValue) => Promise<void>;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationScheme,
    onSubmit: (values, helpers) => {
      helpers.setSubmitting(true);
      props.onSubmit(values).finally(() => helpers.setSubmitting(false));
    },
  });
  const {
    values,
    handleChange,
    submitForm,
    touched,
    errors,
    isValid,
    isSubmitting,
  } = formik;
  return (
    <FormBox>
      <InputContainer>
        <TextField
          name={'email'}
          label="Email"
          variant="standard"
          value={values.email}
          onChange={handleChange}
        />
        <ErrorMessage>{touched.email && errors.email}</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <TextField
          name={'password'}
          label="Password"
          variant="standard"
          type={'password'}
          value={values.password}
          onChange={handleChange}
        />
        <ErrorMessage>{touched.password && errors.password}</ErrorMessage>
      </InputContainer>
      <SubmitButton onClick={submitForm} disabled={!isValid || isSubmitting}>
        Submit
      </SubmitButton>
    </FormBox>
  );
};

export default LoginForm;
