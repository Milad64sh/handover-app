import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import styles from './navbar.module.scss';

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__logo}>
          <NavLink
            className={styles.container__content__logo__link}
            to={'/home'}
            activeClassName={styles.active}
          >
            jigsaw creative care
          </NavLink>
        </div>
        <div className={styles.container__content__links}>
          {auth.isLoggedIn && auth.isManager && (
            <>
              <div className={styles.container__content__links__item}>
                <NavLink
                  className={styles.container__content__links__item__link}
                  to={'/users'}
                  activeClassName={styles.active}
                >
                  USERS
                </NavLink>
              </div>
              <div className={styles.container__content__links__item}>
                <NavLink
                  className={styles.container__content__links__item__link}
                  to={'/all-forms'}
                  activeClassName={styles.active}
                >
                  All FORMS
                </NavLink>
              </div>
              <div className={styles.container__content__links__item}>
                <NavLink
                  className={styles.container__content__links__item__link}
                  to={'/users/new'}
                  activeClassName={styles.active}
                >
                  NEW USER
                </NavLink>
              </div>
            </>
          )}
          {auth.isLoggedIn && (
            <div className={styles.container__content__links__item}>
              <NavLink
                className={styles.container__content__links__item__link}
                to={`${auth.userId}/forms`}
                activeClassName={styles.active}
              >
                MY FORMS
              </NavLink>
            </div>
          )}
          {!auth.isLoggedIn && (
            <div className={styles.container__content__links__item}>
              <NavLink
                className={styles.container__content__links__item__link}
                to={'/auth'}
                activeClassName={styles.active}
              >
                LOGIN
              </NavLink>
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
