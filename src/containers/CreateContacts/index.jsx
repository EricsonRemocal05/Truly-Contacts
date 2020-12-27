import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import createContact from '../../context/actions/contacts/createContact';
import { GlobalContext } from '../../context/Provider';
import CreateContact from '../../layout/Contacts/Create';
import clearCreateContacts from '../../context/actions/contacts/clearCreateContacts';

const CreateContactContainer = () => {
  const [form, setForm] = useState({});
  const history = useHistory();

  const {
    contactsDispatch,
    contactsState: {
      addContact: { loading, error, data },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      history.push('/');
    }
    return () => {
      clearCreateContacts()(contactsDispatch);
    };
  }, [data]);

  const formIsHalfFilled =
    Object.values(form).filter((item) => item && item !== '')?.length > 0 &&
    !data;

  console.log('loading :>> ', loading);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch);
  };

  const formInvalid =
    !form.firstName?.length ||
    !form.lastName?.length ||
    !form.countryCode?.length ||
    !form.phoneNumber?.length;

  return (
    <CreateContact
      onSubmit={onSubmit}
      formInvalid={formInvalid}
      onChange={onChange}
      form={form}
      loading={loading}
      formIsHalfFilled={formIsHalfFilled}
    />
  );
};

export default CreateContactContainer;
