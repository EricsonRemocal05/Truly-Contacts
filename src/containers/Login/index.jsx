import React from 'react';
import LoginUI from '../../layout/Login';
import useForm from './useForm';

const LoginContainer = () => {
  return <LoginUI form={useForm()} />;
};

export default LoginContainer;
