import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operationsAuth';
import { useAuth } from 'hooks';
import style from './UserMenu.module.css';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { userName } = useAuth();
    
    return (
      <div className={style.wrapper}>
        <p className={style.username}>Welcome, {userName.name}</p>
            <button
                type="button"
                onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    );
}