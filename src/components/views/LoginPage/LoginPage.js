import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = e => {
    e.preventDefault();

    if (email !== 'admin' && password !== 'pass') {
      setError('Nieprawidłowy login i hasło');
    } else if (email !== 'admin') {
      setError('Nieprawidłowy login');
    } else if (password !== 'pass') {
      setError('Nieprawidłowe hasło');
    } else {
      setError('');
      history.push('/'); // zamiast navigate('/')
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <fieldset className={styles.loginInfo}>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </fieldset>

            {error && <p className={styles.error}>{error}</p>}

            <fieldset className={styles.forgotPassword}>
              <p>
                Forgot password? <a href='#'>Remind me.</a>
              </p>
            </fieldset>

            <fieldset className={styles.loginBtns}>
              <button type='submit' className={styles.btn}>
                Log in
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
