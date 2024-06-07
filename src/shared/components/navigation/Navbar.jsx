import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import AppContext from '../../../appContext';
import styles from './navbar.module.scss';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import DropDownHandover from './components/DropDownHandover';
import DropDownAllForms from './components/DropDownAllForms';
import DropDownWideScreen from './components/DropDownWideScreen';

const Navbar = () => {
  const {
    setShowFormsWideScreen,
    showFormsWideScreen,
    toggleAllFormsWideScreen,
  } = useContext(AppContext);
  const auth = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showForms, setShowForms] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setShowCategory(false);
    setShowForms(false);
  };

  const toggleAllForms = () => {
    setShowForms((prev) => !prev);
    setShowCategory(false);
  };

  const toggleCategory = () => {
    setShowCategory((prev) => !prev);
    setShowForms(false);
    setShowFormsWideScreen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setShowCategory(false);
    setShowFormsWideScreen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
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
                  setShowFormsWideScreen(false);
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
                {auth.isLoggedIn && (
                  <div
                    className={`${
                      styles.container__MobContent__dropDown__category
                    } ${showCategory ? styles.expand : ''}`}
                  >
                    <div
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
                    </div>
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
                )}
                {auth.isLoggedIn && auth.isManager && (
                  <>
                    <div
                      className={styles.container__MobContent__dropDown__item}
                    >
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
                    {auth.isLoggedIn && auth.isManager && (
                      <div
                        className={`${
                          styles.container__MobContent__dropDown__category
                        } ${showCategory ? styles.expand : ''}`}
                      >
                        <div
                          className={
                            styles.container__MobContent__dropDown__category__item
                          }
                          onClick={toggleAllForms}
                          activeClassName={styles.active}
                        >
                          ALL FORMS
                          <div
                            className={`${
                              styles.container__MobContent__dropDown__category__item__span
                            } ${showForms ? styles.rotate : ''}`}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </div>
                        </div>
                        {/* dropDown all updated forms */}
                        <div
                          className={`${
                            styles.container__MobContent__dropDown__category__items
                          } ${showForms ? styles.show : ''}`}
                        >
                          <DropDownAllForms
                            toggleMenu={toggleMenu}
                            toggleAllForms={toggleAllForms}
                            handleNavigation={() => {
                              setIsMenuOpen(false);
                              setShowCategory(false);
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div
                      className={styles.container__MobContent__dropDown__item}
                    >
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
                      className={
                        styles.container__MobContent__dropDown__item__link
                      }
                      to={`${auth.userId}/forms`}
                      activeClassName={styles.active}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setShowCategory(false);
                      }}
                    >
                      MY FORMS
                    </NavLink>
                  </div>
                )}
                {!auth.isLoggedIn && (
                  <div className={styles.container__MobContent__dropDown__item}>
                    <NavLink
                      className={
                        styles.container__MobContent__dropDown__item__link
                      }
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

            {/* LAPTOP SCREEN */}

            <div className={styles.container__content__links}>
              {auth.isLoggedIn && auth.isManager && (
                <>
                  <div className={styles.container__content__links__item}>
                    <NavLink
                      className={styles.container__content__links__item__link}
                      to={'/users'}
                      activeClassName={styles.active}
                      onClick={handleLinkClick}
                    >
                      USERS
                    </NavLink>
                  </div>
                  <div className={styles.container__content__links__item}>
                    <div
                      className={styles.container__content__links__item__link}
                      activeClassName={styles.active}
                      onClick={toggleAllFormsWideScreen}
                    >
                      All FORMS
                      <div
                        className={`${
                          styles.container__content__links__item__link__span
                        } ${showFormsWideScreen ? styles.rotate : ''}`}
                      >
                        <MdOutlineKeyboardArrowDown />
                      </div>
                    </div>
                  </div>
                  <div className={styles.container__content__links__item}>
                    <NavLink
                      className={styles.container__content__links__item__link}
                      to={'/users/new'}
                      activeClassName={styles.active}
                      onClick={handleLinkClick}
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
                    onClick={handleLinkClick}
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
                    onClick={handleLinkClick}
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
        <div
          className={`${styles.dropDownAllForms} ${
            showFormsWideScreen ? styles.show : ''
          }`}
        >
          <DropDownWideScreen SetShowFormsWideScreen={setShowFormsWideScreen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
