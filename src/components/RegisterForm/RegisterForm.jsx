import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }
    
    return (
        <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
            <label className={StyleSheet.label}>
                Username
                <input type="text" name='name'/>
            </label>
            <label className={StyleSheet.label}>
                Email
                <input type="email" name="email" />
            </label>
            <label className={StyleSheet.label}>
                Password
                <input type="password" name='password' />
            </label>
            <button type="submit">Register</button>
        </form>
      );
}
 
export default RegisterForm;