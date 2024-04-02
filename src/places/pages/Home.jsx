import React, { useContext } from 'react';

import styles from './home.module.scss';
import Sidebar from '../components/Sidebar';
import AppContext from '../../appContext';
import { AuthContext } from '../../shared/context/auth-context';
import Handovers from '../components/Handovers';
const Home = () => {
  const { openItem } = useContext(AppContext);
  const auth = useContext(AuthContext);
  return (
    <>
      <div className={styles.container}>
        {auth.isLoggedIn && (
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        )}
        <div className={styles.hero}>
          {openItem ? (
            <div className={styles.hero__handovers}>
              <Handovers />
            </div>
          ) : (
            <div className={styles.hero__title}>
              <h2>welcome to jigsaw team portal</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
