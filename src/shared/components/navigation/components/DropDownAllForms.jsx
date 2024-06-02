import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dropDownHandover.module.scss';

const DropDownAllForms = ({ toggleMenu, toggleAllForms, handleNavigation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/daily-uploaded-forms'}
          onClick={handleNavigation}
        >
          daily uploaded forms
        </NavLink>
      </div>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/weekly-uploaded-forms'}
          onClick={handleNavigation}
        >
          weekly uploaded forms
        </NavLink>
      </div>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/monthly-uploaded-forms'}
          onClick={handleNavigation}
        >
          monthly uploaded forms
        </NavLink>
      </div>
    </div>
  );
};

export default DropDownAllForms;
