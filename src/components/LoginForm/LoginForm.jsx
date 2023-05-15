import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operationsAuth';
import style from './LoginForm.module.css';


const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return ( 
    <div className={style.loginForm}>
      <h3 className={style.formTitle}>Log In</h3>
        <form className={style.formField} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
          <input
            type="email"
            name="email"
          />
      </label>
      <label>
        Password
          <input
            type="password"
            name="password" />
      </label>
      <button type="submit" className={style.formSubmit}>Log In</button>
      </form>
      </div>
     );
}
 
export default LoginForm;