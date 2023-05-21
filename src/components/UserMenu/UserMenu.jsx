import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks';

import Button from '@mui/material/Button';
import style from './UserMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    
    return (
      <div className={style.wrapper}>
        <p className={style.username}>Welcome, {user.name}{""}</p>
        <Button
          variant="outlined"
          onClick={() => dispatch(logOut())}
        >Logout
        </Button>
      </div>
    );
}