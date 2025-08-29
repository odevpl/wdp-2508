import React from 'react';
import styles from './RegisterPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useHistory } from 'react-router-dom';

export default function RegisterPage() {
  const history = useHistory();

  const handleGoHome = () => {
    history.push('/');
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <form className={styles.form}>
          <div className={styles.accountType}>
            <div className={styles.accountItem}>
              <input id='hasAccount' type='checkbox' />
              <label htmlFor='hasAccount'>Mam konto</label>
            </div>
            <div className={styles.accountItem}>
              <input id='noAccount' type='checkbox' />
              <label htmlFor='noAccount'>Nie mam konta</label>
            </div>
          </div>
          <p className={styles.title}>Podaj dane do rejestracji</p>
          <div className={styles.inputGroup}>
            <input type='email' placeholder='E-mail *' />
          </div>
          <div className={styles.inputGroup}>
            <input type='password' placeholder='Hasło *' />
          </div>
          <div className={styles.inputGroup}>
            <input type='password' placeholder='Powtórz hasło *' />
          </div>
          <div className={styles.checkboxItemPassword}>
            <FontAwesomeIcon icon={faEye} />
            {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
            <p>Pokaż hasło</p>
          </div>
          <div className={styles.checkboxGroup}>
            <div className={styles.checkboxItem}>
              <input id='acceptAll' type='checkbox' />
              <label htmlFor='acceptAll'>Zaznacz wszystko</label>
            </div>
            <div className={styles.checkboxItem}>
              <input id='acceptStatute' type='checkbox' />
              <label htmlFor='acceptStatute'>
                Akceptuje warunki
                <span>
                  <a href='#'> regulaminu</a> *
                </span>
              </label>
            </div>
            <div className={styles.checkboxItem}>
              <input id='newsletter' type='checkbox' />
              <label htmlFor='newsletter'>Tak. Chcę otrzymywać newsletter</label>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <Button
              onClick={handleGoHome}
              variant='outline'
              type='button'
              className={styles.buttonBack}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Wróć</span>
            </Button>
            <Button
              onClick={handleGoHome}
              variant='small'
              type='button'
              className={styles.buttonRegister}
            >
              Zarejestruj się
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
