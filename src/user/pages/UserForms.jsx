import React, { useEffect, useState } from 'react';
import UserListOfForms from '../components/UserListOfForms';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const UserForms = () => {
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
  const placeDeletedHandler = (deletedFormId) => {
    setLoadedForms((prevForms) =>
      prevForms.filter((form) => form.id !== deletedFormId)
    );
  };
  return (
    <>
      {/* <ErrorModal error={error} onClear={clearError} */}
      {isLoading && <LoadingSpinner />}
      {!isLoading && loadedForms && (
        <UserListOfForms
          forms={loadedForms}
          onDeleteForm={placeDeletedHandler}
        />
      )}
    </>
  );
};

export default UserForms;
