import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ContactListUI state={contactsState} />;
};

export default ContactsContainer;
