import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
const navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__logo}>
          <Link to={'/home'}>jigsaw creative care</Link>
        </div>
        <div className={styles.container__content__links}>
          <div className={styles.container__content__links__item}>
            <Link to={`/p1/forms`}>MY FORMS</Link>
          </div>
          <div className={styles.container__content__links__item}>login</div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
