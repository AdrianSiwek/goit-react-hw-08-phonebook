import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorStatus, getIsLoadingStatus } from 'redux/contacts/selectors';
import { fetchContact } from 'redux/contacts/operations';
import ContactForm from '../ContactForm/ContactForm'
import Filtr from '../StatusFilter/StatusFilter';
import ContactList from '../ContactList/ContactList';

import styles from './App.module.css';



export const App = () => {
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
        <Filtr />
        {isLoading && !error ? <p>Loading...</p> : <ContactList />}
      </div>
    );
  }

 
