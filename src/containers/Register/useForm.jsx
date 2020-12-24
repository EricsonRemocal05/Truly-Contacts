import { useContext, useState, useEffect } from 'react';
import { register } from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const {
    authDispatch,
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
      }
    }
  }, [error]);

  console.log('error :>> ', error);

  console.log('data :>> ', data);

  console.log('authState :>> ', loading);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  console.log('form :>> ', form);

  const registerFormValid =
    !form.username?.length ||
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.email?.length ||
    !form.password?.length;

  const onSubmit = () => {
    setFieldErrors({});
    register(form)(authDispatch);
  };

  return { form, onChange, loading, fieldErrors, registerFormValid, onSubmit };
};
