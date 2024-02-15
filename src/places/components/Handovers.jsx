import React from 'react';
import styles from './handovers.module.scss';
import { Link } from 'react-router-dom';

const Handovers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__items}>
        <div className={styles.container__items__item}>
          <Link className={styles.href} to={'/daily-handover'}>
            daily handover
          </Link>
        </div>
        <div className={styles.container__items__item}>
          <Link className={styles.href} to={'/weekly-handover'}>
            weekly handover
          </Link>
        </div>
        <div href='/monthly-handover' className={styles.container__items__item}>
          <Link className={styles.href} to={'/monthly-handover'}>
            monthly handover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Handovers;
