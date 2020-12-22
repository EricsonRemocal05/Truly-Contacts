import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../context/actions/register';
import RegisterUI from '../../layout/Register';
import useForm from './useForm';

const RegisterContainer = () => {
  useEffect(() => {
    register();
  }, []);

  return <RegisterUI form={useForm()} />;
};

export default RegisterContainer;
