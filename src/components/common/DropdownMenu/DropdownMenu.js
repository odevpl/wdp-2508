import React from 'react';
import PropTypes from 'prop-types';

import styles from './DropdownMenu.module.scss';

const DropdownMenu = ({ title, content }) => {
  return (
    <ul
      tabIndex='0'
      className={styles.dropdown}
      onClick={e => {
        e.target.blur();
      }}
    >
      <li className={styles.title}>{title}</li>
      <ul className={styles.dropdownContent}>
        {content.map(item => (
          <li key={item.id} id={item.id}>
            <a className={styles.link} href={'/' + item.id}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </ul>
  );
};

DropdownMenu.propTypes = {
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
};

export default DropdownMenu;
