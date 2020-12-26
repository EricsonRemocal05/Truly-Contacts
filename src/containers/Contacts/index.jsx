import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/Provider';
import ContactListUI from '../../layout/Contacts/List';

const ContactsContainer = () => {
  const { contactsDispatch, contactsState } = useContext(GlobalContext);

  const history = useHistory();
  // console.log(context);

  console.log('contactsState :>> ', contactsState);

  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);

  return <ContactListUI state={contactsState} />;
};

export default ContactsContainer;
