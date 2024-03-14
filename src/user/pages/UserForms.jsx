import React, { useContext, useEffect, useState } from 'react';
import UserListOfForms from '../components/UserListOfForms';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { useParams } from 'react-router-dom';
import AppContext from '../../appContext';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import Sidebar from '../../places/components/Sidebar';

import styles from '../../places/pages/home.module.scss';
import userStyles from './userForms.module.scss';
import Handovers from '../../places/components/Handovers';

const UserForms = () => {
  const { openItem } = useContext(AppContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForms, setLoadedForms] = useState();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/weekly-handovers/user/${userId}`
        );
        setLoadedForms(responseData.forms);
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchForms();
  }, [sendRequest, userId]);

  const formDeletedHandler = (deletedFormId) => {
    setLoadedForms((prevForms) =>
      prevForms.filter((form) => form.id !== deletedFormId)
    );
  };
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner />}
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={userStyles.container}>
          <div className={userStyles.container__handovers}></div>
          {openItem ? <Handovers /> : ''}

          <div className={userStyles.container__formList}>
            <div className={userStyles.container__formList__daily}>
              <div className={userStyles.container__formList__daily__dailyH2}>
                <h2>your daily handovers</h2>
              </div>
            </div>
            <div className={userStyles.container__formList__weekly}>
              <div className={userStyles.container__formList__weekly__weeklyH2}>
                <h2>your weekly handovers</h2>
              </div>
              {!isLoading && loadedForms && (
                <UserListOfForms
                  forms={loadedForms}
                  onDeleteForm={formDeletedHandler}
                />
              )}
            </div>
            <div className={userStyles.container__formList__monthly}>
              <div
                className={userStyles.container__formList__monthly__monthlyH2}
              >
                <h2>your monthly handovers</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForms;
