import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getErrorStatus, getIsLoadingStatus } from 'redux/contacts/selectors';
import { fetchContact } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import StatusFilter from 'components/StatusFilter/StatusFilter';
import ContactList from 'components/ContactList/ContactList';

import styles from 'components/ContactList/ContactList.module.css';


const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingStatus);
  const error = useSelector(getErrorStatus);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const openModal = () => {
    
   
const modal = document.getElementById('modal');
    modal.style.display = 'block';
  };


  const closeModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  };


  return (
    <>
      <div>
        <button onClick={openModal}>Add Contact</button>
        <ContactForm />
        <button onClick={closeModal}>X</button>
      </div>
      <div>
        <h2>Contacts</h2>
        <StatusFilter />
        {isLoading && !error ? <p>Loading...</p> : <ContactList />}
      </div>
    </>
  );
};

export default Contact;