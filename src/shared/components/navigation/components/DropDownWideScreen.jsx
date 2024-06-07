import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dropDownWideScreen.module.scss';

const DropDownWideScreen = ({ SetShowFormsWideScreen }) => {
  const toggleAllform = () => {
    SetShowFormsWideScreen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/daily-uploaded-forms'}
          onClick={toggleAllform}
        >
          daily uploaded forms
        </NavLink>
      </div>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/weekly-uploaded-forms'}
          onClick={toggleAllform}
        >
          weekly uploaded forms
        </NavLink>
      </div>
      <div className={styles.container__item}>
        <NavLink
          className={styles.href}
          to={'/monthly-uploaded-forms'}
          onClick={toggleAllform}
        >
          monthly uploaded forms
        </NavLink>
      </div>
    </div>
  );
};

export default DropDownWideScreen;
