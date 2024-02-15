import React, { useContext } from 'react';

import styles from './sidebar.module.scss';
import AppContext from '../../appContext';

const Sidebar = () => {
  const { toggleOpenItem, isClicked } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <div className={styles.container__items}>
        <div
          onClick={toggleOpenItem}
          className={`${styles.container__items__item} ${
            isClicked ? styles.clicked : ''
          }`}
        >
          handovers
        </div>
        <div className={styles.container__items__item}>money checks</div>
        <div className={styles.container__items__item}>my profile</div>
      </div>
    </div>
  );
};

export default Sidebar;
