import styles from './AuthenticationCard.module.css'
import axios from 'axios';
import { useState } from "react";
import { useAuth } from '../contexts/AuthProvider';

const AuthenticationCard = (props) => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [isRegisterActive, setIsRegisterActive] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const { login } = useAuth();

    const setRegisterActive = () => {
        setIsLoginActive(false);
        clearFields();
        setIsRegisterActive(true);
    }

    const setLoginActive = () => {
        setIsRegisterActive(false);
        clearFields();
        setIsLoginActive(true);
    }

    const clearFields = () => {
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfPassword("");
    }

    const changeFnameHandler = (e) => {
        setFname(e.target.value);
    }

    const changeLnameHandler = (e) => {
        setLname(e.target.value);
    }
    const changeEmailHandler = (e) => {
        setEmail(e.target.value);
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const changeConfPasswordHandler = (e) => {
        setConfPassword(e.target.value);
    }

    const closeFormHandler = () => {
        props.onClose();
    }

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7192/account/login', {
                fname,
                lname,
                email,
                password
            });
            console.log('Response:', response.data);
            localStorage.setItem('userData', JSON.stringify(response.data));
            login(response.data);
            closeFormHandler();
        } catch (error) {
            console.error('Error:', error.message);
            if (error.response) {
                if (error.response.status === 401) {
                    alert('Invalid credentials');
                } else if (error.response.status === 400) {
                    alert('Login failed');
                }
            } else {
                console.error('Error:', error);
            }
        }
    }

    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7192/account/register', {
                fname,
                lname,
                email,
                password
            });
            console.log('Response:', response.data);
            alert("Registered successfully!");
            setLoginActive();
        } catch (error) {
            console.error('Error:', error.message);
            if (error.response) {
                if (error.response.status === 401) {
                    alert('A user with this email already exists');
                } else if (error.response.status === 400) {
                    alert('Registration failed');
                }
            } else {
                console.error('Error:', error);
            }
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        <div className={styles.signUpTab} onClick={setLoginActive}
            style={{ backgroundColor: isLoginActive ? 'rgb(208, 217, 226)' : 'rgb(222, 222, 222)' }}>
            <label style={{cursor: 'pointer'}}>Login</label>
        </div>
        <div className={styles.registerTab} onClick={setRegisterActive}
            style={{ backgroundColor: isRegisterActive ? 'rgb(208, 217, 226)' : 'rgb(222, 222, 222)' }}>
            <label style={{cursor: 'pointer'}}>Register</label>
        </div>
      </div>
      {isLoginActive && <form className={styles.formContainer} style={{marginTop: '10%'}} onSubmit={loginSubmitHandler}>
            <input className={styles.formField} type="email" placeholder='Email' value={email} onChange={changeEmailHandler} required />
            <input className={styles.formField} type="password" placeholder='Password' value={password} onChange={changePasswordHandler} required />
            <button className={styles.formField} style={{backgroundColor: 'blue', color: 'white'}} type="submit">Sign in</button>
            <button className={styles.formField} style={{backgroundColor: 'red', color: 'white'}} type="button" onClick={closeFormHandler}>Cancel</button>
      </form>}
      {isRegisterActive && <form className={styles.formContainer} onSubmit={registerSubmitHandler}>
            <input className={styles.formField} type="text" placeholder='First name' value={fname} onChange={changeFnameHandler} required />
            <input className={styles.formField} type="text" placeholder='Last name' value={lname} onChange={changeLnameHandler} required />
            <input className={styles.formField} type="email" placeholder='Email' value={email} onChange={changeEmailHandler} required />
            <input className={styles.formField} type="password" placeholder='Password' value={password} onChange={changePasswordHandler} required />
            <input className={styles.formField} type="password" placeholder='Repeat Password' value={confPassword} onChange={changeConfPasswordHandler} required />
            <button className={styles.formField} style={{backgroundColor: 'blue', color: 'white'}} type="submit">Register</button>
            <button className={styles.formField} style={{backgroundColor: 'red', color: 'white'}} type="button" onClick={closeFormHandler}>Cancel</button>
      </form>}
    </div>
  );
};


export default AuthenticationCard;