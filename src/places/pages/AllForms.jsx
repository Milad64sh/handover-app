import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import FormsList from '../components/FormsList';
import Filters from '../../shared/components/filters/Filters';
import styles from './allForms.module.scss';
import Pagination from '../components/Pagination';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const SERVICEOPTIONS = [
  { label: 'JS', value: 'JS' },
  { label: 'JB', value: 'JB' },
  { label: 'SC', value: 'SC' },
];

const AllForms = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const pageNumber = useParams();
  const [loadedForms, setLoadedForms] = useState();
  const [staffOptions, setStaffOptions] = useState([]);
  const [staffValue, setStaffValue] = useState([]);
  const [serviceValue, setServiceValue] = useState([]);
  const [paginationData, setPaginationData] = useState({
    total: 0,
    page: pageNumber,
    pages: 1,
  });
  const [openFilters, setOpenFilters] = useState(false);

  const toggleFilter = () => {
    setOpenFilters((prevState) => !prevState);
  };
  const limit = 10;

  const fetchForms = async (page, limit) => {
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

      const url = `http://localhost:5000/api/weekly-handovers?staff=${staffQueryString}&service=${serviceQueryString}&page=${page}&limit=${limit}`;
      const responseData = await sendRequest(url);

      setLoadedForms(responseData.allForms);
      setPaginationData({
        total: responseData.pagination.total,
        page: responseData.pagination.page,
        pages: responseData.pagination.pages,
      });
      // console.log('List of All forms:', responseData.allForms);
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
    setPaginationData((prevPaginationData) => ({
      ...prevPaginationData,
      page: 1,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [staffValue, serviceValue]);

  useEffect(() => {
    fetchForms(paginationData.page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationData.page, staffValue, serviceValue]);

  const changePage = (newPage) => {
    setPaginationData((prevPaginationData) => ({
      ...prevPaginationData,
      page: newPage,
    }));
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedForms && (
        <>
          <div className={styles.button}>
            <button onClick={toggleFilter} className={styles.button__toggle}>
              <h3>filters</h3>
              <div
                className={`${styles.button__toggle__icon} ${
                  openFilters ? styles.rotate : ''
                }`}
              >
                <MdOutlineKeyboardArrowDown />
              </div>
            </button>
          </div>
          <div
            className={`${styles.filters} ${
              openFilters ? styles.open : styles.close
            }`}
          >
            <Filters
              staffValue={staffValue}
              serviceValue={serviceValue}
              serviceOptions={SERVICEOPTIONS}
              staffOptions={staffOptions}
              setStaffValue={setStaffValue}
              setServiceValue={setServiceValue}
              onFilterChange={handleFilterChange}
              openFilters={openFilters}
            />
          </div>
          <div className={styles.container}>
            <div className={styles.container__heading}>list of all forms</div>
            <div className={styles.container__pagination}>
              <Pagination
                page={paginationData.page}
                pages={paginationData.pages}
                changePage={changePage}
              />
            </div>
            <div className={styles.container__list}>
              <FormsList
                forms={loadedForms}
                onDeleteForm={formDeletedHandler}
              />
            </div>
            <div className={styles.container__pagination}>
              <Pagination
                page={paginationData.page}
                pages={paginationData.pages}
                changePage={changePage}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AllForms;
