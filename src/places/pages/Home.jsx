import React, { useContext } from 'react';

import styles from './home.module.scss';
import Sidebar from '../components/Sidebar';
import AppContext from '../../appContext';
import Handovers from '../components/Handovers';
const Home = () => {
  const { openItem } = useContext(AppContext);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.hero}>
          <div className={styles.hero__title}>
            <h2>welcome to jigsaw team portal</h2>
          </div>
          {openItem ? <Handovers /> : ''}
        </div>
      </div>
    </>
  );
};

export default Home;
