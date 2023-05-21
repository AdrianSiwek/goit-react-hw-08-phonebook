import { useDispatch, useSelector } from "react-redux";
import { getContacts, getErrorStatus, getFilterValue} from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";

import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


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
         <ListItem
            key={id}
            secondaryAction={
              <Button variant="outlined" disableElevation
                onClick={() => dispatch(deleteContact(id))}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${name}`}
                  src={`/static/images/avatar/${name}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={id} primary={`${name}: ${number}`} />
            </ListItemButton>
          </ListItem>
      ))}
    </ul>
  ) : ((error && <p>Error: {error}</p> )|| <p>No contacts</p>
    );
}


export default ContactList;