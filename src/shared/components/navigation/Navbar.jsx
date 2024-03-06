import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import styles from './navbar.module.scss';

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__logo}>
          <Link className={styles.container__content__logo__link} to={'/home'}>
            jigsaw creative care
          </Link>
        </div>
        <div className={styles.container__content__links}>
          {auth.isLoggedIn && auth.isManager && (
            <>
              <div className={styles.container__content__links__item}>
                <Link
                  className={styles.container__content__links__item__link}
                  to={'/users'}
                >
                  USERS
                </Link>
              </div>
              <div className={styles.container__content__links__item}>
                <Link
                  className={styles.container__content__links__item__link}
                  to={'/all-forms'}
                >
                  All FORMS
                </Link>
              </div>
              <div className={styles.container__content__links__item}>
                <Link
                  className={styles.container__content__links__item__link}
                  to={'/users/new'}
                >
                  NEW USER
                </Link>
              </div>
            </>
          )}
          {auth.isLoggedIn && (
            <div className={styles.container__content__links__item}>
              <Link
                className={styles.container__content__links__item__link}
                to={`${auth.userId}/forms`}
              >
                MY FORMS
              </Link>
            </div>
          )}
          {!auth.isLoggedIn && (
            <div className={styles.container__content__links__item}>
              <Link
                className={styles.container__content__links__item__link}
                to={'/auth'}
              >
                LOGIN
              </Link>
            </div>
          )}
          {auth.isLoggedIn && (
            <button
              className={styles.container__content__links__item}
              onClick={auth.logout}
            >
              LOGOUT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
