import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import styles from './navbar.module.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import DropDownHandover from './components/DropDownHandover';

const Navbar = (props) => {
  const auth = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleCategory = () => {
    setShowCategory((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__logo}>
          <NavLink
            className={styles.container__content__logo__link}
            to={'/home'}
            activeClassName={styles.active}
            onClick={() => {
              setIsMenuOpen(false);
              setShowCategory(false);
            }}
          >
            jigsaw creative care
          </NavLink>
        </div>
        {/* Mobile Navbar */}
        <div className={styles.container__MobContent}>
          <div
            className={`${styles.container__MobContent__menuIcon} ${
              isMenuOpen && styles.open
            }`}
            onClick={toggleMenu}
          >
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
            <div className={styles.iconBar} />
          </div>
          <div
            className={`${styles.container__MobContent__dropDown} ${
              isMenuOpen ? styles.open : ''
            }`}
          >
            {auth.isLoggedIn && auth.isManager && (
              <>
                <div
                  className={`${
                    styles.container__MobContent__dropDown__category
                  } ${showCategory ? styles.expand : ''}`}
                >
                  <button
                    className={
                      styles.container__MobContent__dropDown__category__item
                    }
                    onClick={toggleCategory}
                    activeClassName={styles.active}
                  >
                    HANDOVERS
                    <div
                      className={`${
                        styles.container__MobContent__dropDown__category__item__span
                      } ${showCategory ? styles.rotate : ''}`}
                    >
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  </button>
                  {/* dropDown forms HANDOVERS */}
                  <div
                    className={`${
                      styles.container__MobContent__dropDown__category__items
                    } ${showCategory ? styles.show : ''}`}
                  >
                    <DropDownHandover
                      toggleMenu={toggleMenu}
                      toggleCategory={toggleCategory}
                      handleNavigation={() => {
                        setIsMenuOpen(false);
                        setShowCategory(false);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.container__MobContent__dropDown__item}>
                  <NavLink
                    className={
                      styles.container__MobContent__dropDown__item__link
                    }
                    to={'/users'}
                    activeClassName={styles.active}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowCategory(false);
                    }}
                  >
                    USERS
                  </NavLink>
                </div>
                <div className={styles.container__MobContent__dropDown__item}>
                  <NavLink
                    className={
                      styles.container__MobContent__dropDown__item__link
                    }
                    to={'/all-forms'}
                    activeClassName={styles.active}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowCategory(false);
                    }}
                  >
                    All FORMS
                  </NavLink>
                </div>
                <div className={styles.container__MobContent__dropDown__item}>
                  <NavLink
                    className={
                      styles.container__MobContent__dropDown__item__link
                    }
                    to={'/users/new'}
                    activeClassName={styles.active}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setShowCategory(false);
                    }}
                  >
                    NEW USER
                  </NavLink>
                </div>
              </>
            )}
            {auth.isLoggedIn && (
              <div className={styles.container__MobContent__dropDown__item}>
                <NavLink
                  className={styles.container__MobContent__dropDown__item__link}
                  to={`${auth.userId}/forms`}
                  activeClassName={styles.active}
                >
                  MY FORMS
                </NavLink>
              </div>
            )}
            {!auth.isLoggedIn && (
              <div className={styles.container__MobContent__dropDown__item}>
                <NavLink
                  className={styles.container__MobContent__dropDown__item__link}
                  to={'/auth'}
                  activeClassName={styles.active}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowCategory(false);
                  }}
                >
                  LOGIN
                </NavLink>
              </div>
            )}
            {auth.isLoggedIn && (
              <button
                className={styles.container__MobContent__dropDown__item}
                onClick={auth.logout}
              >
                LOGOUT
              </button>
            )}
          </div>
        </div>
        {/* laptop screen */}
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
