import React from 'react';
import { useDispatch } from "react-redux";

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';



import { setStatusFilter } from 'redux/filter/filterSlice';


const StatusFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
        dispatch(setStatusFilter(event.target.value));
    };
  return ( 
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
       <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Find contacts by name"
        inputProps={{ 'aria-label': 'find contacts by name' }}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Enter name" 
        onChange={handleFilterChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
      </Paper>
     );
}


 
export default StatusFilter;