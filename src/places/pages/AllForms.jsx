import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import styles from './allForms.module.scss';
import FormsList from '../components/FormsList';
const AllForms = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForms, setLoadedForms] = useState();

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/weekly-handovers'
        );

        setLoadedForms(responseData.allForms);
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchForms();
  }, [sendRequest]);
  const formDeletedHandler = (deletedFormId) => {
    setLoadedForms((prevForms) =>
      prevForms.filter((form) => form.id !== deletedFormId)
    );
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedForms && (
        <FormsList forms={loadedForms} onDeleteForm={formDeletedHandler} />
      )}
    </>
  );
};

export default AllForms;
