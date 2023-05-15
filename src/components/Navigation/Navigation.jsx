import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import style from './Navigation.module.css';
import logo from '../../images/phonebook-icone.png';


export const Navigation = () => {
    const isLoggedIn = useAuth();

    return (
      <nav>
        <NavLink className={style.link} to={'/'}>
          <div className={style.home}>
          <img src={logo} alt="logo" width="50" />
            Home
            </div>
        </NavLink>
        {isLoggedIn && (
          <NavLink className={style.link} to="/contact">
            <span className={style.phonebook}>Phonebook</span>
          </NavLink>
        )}
      </nav>
    );
}