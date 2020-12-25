import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import getContacts from '../../context/actions/contacts/getContacts';
import { GlobalContext } from '../../context/Provider';

const ContactsContainer = () => {
  const context = useContext(GlobalContext);

  const history = useHistory();
  // console.log(context);

  useEffect(() => {
    getContacts(history);
  }, []);

  return (
    <div>
      <Header />
      <h1>Contacts</h1>
    </div>
  );
};

export default ContactsContainer;
