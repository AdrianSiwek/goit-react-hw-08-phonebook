import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getErrorStatus, getIsLoadingStatus } from 'redux/contacts/selectors';
import { fetchContact } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import StatusFilter from 'components/StatusFilter/StatusFilter';
import ContactList from 'components/ContactList/ContactList';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




 const Contact = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingStatus);
   const error = useSelector(getErrorStatus);
   
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

   return (
     <>
       <div>
         <Button onClick={handleOpen}>Add Contact</Button>
         <Modal
           open={open}
           onClose={handleClose}
           aria-labelledby="modal-modal-title"
           aria-describedby="modal-modal-description"
         >
           <Box sx={style}>
             <Typography id="modal-modal-title" variant="h6" component="h2">
               Add Contact
             </Typography>
             <ContactForm />
           </Box>
         </Modal>
       </div>
       <div>
         <StatusFilter />
         {isLoading && !error ? <p>Loading...</p> : <ContactList />}
       </div>
     </>
   );
};

export default Contact;