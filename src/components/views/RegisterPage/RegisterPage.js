import React from 'react';
import styles from './RegisterPage.module.scss';

export default function RegisterPage() {
  return (
    <div className={styles.root}>
      <div className='container'>
        <form>
          <div>
            <div>
              <input id='hasAccount' type='radio' />
              <label htmlFor='hasAccount'>Mam konto</label>
            </div>
            <div>
              <input id='noAccount' type='radio' />
              <label htmlFor='noAccount'>Nie mam konta</label>
            </div>
          </div>
          <p>Podaj dane do rejestracji</p>
          <div>
            <input type='email' placeholder='E-mail *' />
          </div>
          <div>
            <input type='password' placeholder='Hasło *' />
          </div>
          <div>
            <input type='password' placeholder='Powtórz hasło *' />
          </div>
          <div>
            <input id='showPassword' type='checkbox' />
            <label htmlFor='showPassword'>Pokaż hasło</label>
          </div>
          <div>
            <div>
              <input id='acceptAll' type='checkbox' />
              <label htmlFor='acceptAll'>Zaznacz wszystko</label>
            </div>
            <div>
              <input id='acceptStatute' type='checkbox' />
              <label htmlFor='acceptStatute'>
                Akceptuje warunki
                <span>
                  <a href='#'> regulaminu</a> *
                </span>
              </label>
            </div>
            <div>
              <input id='newsletter' type='checkbox' />
              <label htmlFor='newsletter'>Tak. Chcę otrzymywać newsletter</label>
            </div>
          </div>
          <div>
            <button>Wróć</button>
            <button>Zarejestruj się </button>
          </div>
        </form>
      </div>
    </div>
  );
}
