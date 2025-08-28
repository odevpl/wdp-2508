import React, { useState } from 'react';
import styles from './RegisterPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useHistory } from 'react-router-dom';

export default function RegisterPage() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (
      !formData.firstName ||
      formData.firstName.trim().length < 3 ||
      formData.firstName.trim().length > 30
    ) {
      newErrors.firstName = 'First name musi mieć od 3 do 30 znaków.';
    }

    if (
      !formData.lastName ||
      formData.lastName.trim().length < 3 ||
      formData.lastName.trim().length > 30
    ) {
      newErrors.lastName = 'Last name musi mieć od 3 do 30 znaków.';
    }

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Email musi zawierać znak @.';
    }

    if (!formData.password || formData.password.length < 3) {
      newErrors.password = 'Hasło musi mieć minimum 3 znaki.';
    }

    if (!formData.confirmPassword || formData.confirmPassword.length < 3) {
      newErrors.confirmPassword = 'Powtórz hasło (min. 3 znaki).';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Hasła muszą być identyczne.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();
    if (validate()) {
      history.push('/');
    }
  };

  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <form className={styles.form} onSubmit={handleSubmit}>
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
            <input
              type='text'
              name='firstName'
              placeholder='First name *'
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type='text'
              name='lastName'
              placeholder='Last name *'
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type='email'
              name='email'
              placeholder='E-mail *'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type='password'
              name='password'
              placeholder='Hasło *'
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Powtórz hasło *'
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword}</p>
            )}
          </div>

          <div className={styles.checkboxItemPassword}>
            <FontAwesomeIcon icon={faEye} />
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
              onClick={handleSubmit}
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
