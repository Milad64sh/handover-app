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
          <Link to={'/home'}>jigsaw creative care</Link>
        </div>
        <div className={styles.container__content__links}>
          {auth.isLoggedIn && (
            <div className={styles.container__content__links__item}>
              <Link to={`/p1/forms`}>MY FORMS</Link>
            </div>
          )}
          {!auth.isLoggedIn && (
            <div className={styles.container__content__links__item}>
              <Link to={'/auth'}>LOGIN</Link>
            </div>
          )}
          {auth.isLoggedIn && <button onClick={auth.logout}>LOGOUT</button>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
