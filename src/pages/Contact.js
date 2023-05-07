import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getErrorStatus, getIsLoadingStatus } from 'redux/contacts/selectors';
import { fetchContact } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import StatusFilter from 'components/StatusFilter/StatusFilter';
import ContactList from 'components/ContactList/ContactList';

import styles from 'components/ContactList/ContactList.module.css';


export const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingStatus);
  const error = useSelector(getErrorStatus);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div className={styles.form}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <StatusFilter />
      {isLoading && !error ? <p>Loading...</p> : <ContactList />}
    </div>
  );
};