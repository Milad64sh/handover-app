import React from 'react';
import { Link } from 'react-router-dom';
import styles from './dropDownHandover.module.scss';

const DropDownHandover = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__item}>
        <Link className={styles.href} to={'/daily-handover'}>
          daily handover
        </Link>
      </div>
      <div className={styles.container__item}>
        <Link className={styles.href} to={'/weekly-handover'}>
          weekly handover
        </Link>
      </div>
      <div href='/monthly-handover' className={styles.container__item}>
        <Link className={styles.href} to={'/monthly-handover'}>
          monthly handover
        </Link>
      </div>
    </div>
  );
};

export default DropDownHandover;
