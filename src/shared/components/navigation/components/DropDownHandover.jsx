import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dropDownHandover.module.scss';

const DropDownHandover = ({ toggleMenu, toggleCategory, handleNavigation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/daily-handover'}
          onClick={handleNavigation}
        >
          daily handover
        </NavLink>
      </div>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/weekly-handover'}
          onClick={handleNavigation}
        >
          weekly handover
        </NavLink>
      </div>
      <div href='/monthly-handover' className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/monthly-handover'}
          onClick={handleNavigation}
        >
          monthly handover
        </NavLink>
      </div>
    </div>
  );
};

export default DropDownHandover;
