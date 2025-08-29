import React from 'react';
// import PropTypes from 'prop-types';

import styles from './LoginPage.module.scss';

const LoginPage = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.wrapper}>
        <form action='/' method='text/plain' className={styles.loginForm}>
          <fieldset className={styles.loginInfo}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required />
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required />
          </fieldset>
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

// LoginPage.propTypes = {};

export default LoginPage;
