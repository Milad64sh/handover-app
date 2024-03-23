import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import FormsList from '../components/FormsList';
import Filters from '../../shared/components/filters/Filters';

export const STAFFOPTIONS = [
  { label: 'MS', value: 'MS' },
  { label: 'AA', value: 'AA' },
  { label: 'AR', value: 'AR' },
  { label: 'JD', value: 'JD' },
];
export const SERVICEOPTIONS = [
  { label: 'JS', value: 'JS' },
  { label: 'JB', value: 'JB' },
  { label: 'SC', value: 'SC' },
];

const AllForms = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForms, setLoadedForms] = useState();
  const [staffOptions, setStaffOptions] = useState([]);
  // const [serviceOptions, setServiceOptions] = useState([]);
  const [staffValue, setStaffValue] = useState([]);
  const [serviceValue, setServiceValue] = useState([]);

  const fetchForms = async () => {
    try {
      const filters = {};
      if (staffValue.length > 0) {
        filters.staff = staffValue;
      }
      if (serviceValue.length > 0) {
        filters.service = serviceValue;
      }
      const staffQueryString = staffValue
        .map((option) => option.value)
        .join(',');
      const serviceQueryString = serviceValue
        .map((option) => option.value)
        .join(',');

      const url = `http://localhost:5000/api/weekly-handovers?staff=${staffQueryString}&service=${serviceQueryString}`;
      const responseData = await sendRequest(url);

      setLoadedForms(responseData.allForms);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsersNames = async () => {
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/users/names'
      );
      if (!responseData) {
        throw new Error('Failed to fetch usersNames');
      }
      const processedOptions = responseData.map((name) => ({
        label: name,
        value: name,
      }));
      console.log(processedOptions);
      setStaffOptions(processedOptions);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilterChange = (filterType, selectedValue) => {
    if (filterType === 'staff') {
      setStaffValue(selectedValue);
    } else if (filterType === 'service') {
      setServiceValue(selectedValue);
    }
  };

  const formDeletedHandler = (deletedFormId) => {
    setLoadedForms((prevForms) =>
      prevForms.filter((form) => form.id !== deletedFormId)
    );
  };

  useEffect(() => {
    fetchUsersNames();
    fetchForms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffValue, serviceValue]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedForms && (
        <>
          <Filters
            staffValue={staffValue}
            serviceValue={serviceValue}
            serviceOptions={SERVICEOPTIONS}
            staffOptions={staffOptions}
            setStaffValue={setStaffValue}
            setServiceValue={setServiceValue}
            onFilterChange={handleFilterChange}
          />
          <FormsList forms={loadedForms} onDeleteForm={formDeletedHandler} />
        </>
      )}
    </>
  );
};

export default AllForms;
