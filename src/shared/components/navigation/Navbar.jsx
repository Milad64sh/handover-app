import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
const navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__logo}>
          <Link to={'/home'}>jigsaw creative care</Link>
        </div>
        <div className={styles.container__content__icons}>login</div>
      </div>
    </div>
  );
};

export default navbar;
