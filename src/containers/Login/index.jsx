import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/Provider';

const LoginContainer = () => {
  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  console.log('data :>> ', data);
  return (
    <div>
      <h1>{data ? `Welcome  ${data?.username}` : 'Login Here'}</h1>
      <Link to='/auth/register'>Register</Link>
    </div>
  );
};

export default LoginContainer;
