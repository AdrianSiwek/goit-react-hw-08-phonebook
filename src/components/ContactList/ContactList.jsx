import { useDispatch, useSelector } from "react-redux";
import { getContacts, getErrorStatus, getFilterValue} from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";


import styles from './ContactList.module.css';




export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const error = useSelector(getErrorStatus);
  
  const filtersContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(statusFilter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(statusFilter.replace(/-|\s/g, ''))
  );

  
  
  return filtersContacts.length > 0 ?(
    <ul className={styles.list}>
          {filtersContacts.map(({ id, name, number }) => (
        <li className={styles.contact} 
          key={id}>
        <p>{name}:</p>
        <p>{number}</p>
         <button
            className={styles.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <span>Delete</span>
          </button>        
        </li>
      ))}
    </ul>
  ) : ((error && <p>Error: {error}</p> )|| <p>No contacts</p>
    );
}


export default ContactList;