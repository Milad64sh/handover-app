import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import styles from './users.module.scss';
import Pagination from '../../places/components/Pagination';

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const pageNumber = useParams();
  const [loadedUsers, setLoadedUsers] = useState();
  const [paginationData, setPaginationData] = useState({
    total: 0,
    page: pageNumber,
    pages: 1,
  });
  const limit = 10;

  const userDeletedHandler = (deletedUserId) => {
    setLoadedUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
    );
  };

  const fetchUsers = async (page, limit) => {
    try {
      const url = `http://localhost:5000/api/users?page=${page}&limit=${limit}`;
      const responseData = await sendRequest(url);

      setLoadedUsers(responseData.users);
      console.log(responseData);
      setPaginationData({
        total: responseData.pagination.total,
        page: responseData.pagination.page,
        pages: responseData.pagination.pages,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers(paginationData.page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationData.page]);
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
      {!isLoading && loadedUsers && (
        <>
          <div className={styles.container}>
            <div className={styles.container__heading}>list of all users</div>
            <div className={styles.container__pagination}>
              <Pagination
                page={paginationData.page}
                pages={paginationData.pages}
                changePage={changePage}
              />
            </div>
            <div className={styles.container__list}>
              <UsersList
                items={loadedUsers}
                onDeleteUser={userDeletedHandler}
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

export default Users;
