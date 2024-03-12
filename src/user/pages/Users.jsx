import React, { useEffect, useState } from 'react';
import UsersList from '../components/UsersList';

import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/Http-hook';

const Users = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5000/api/users'
        );

        setLoadedUsers(responseData);
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [sendRequest]);
  const userDeletedHandler = (deletedUserId) => {
    setLoadedUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== deletedUserId)
    );
  };

  return (
    <>
      {/* <ErrorModal error={error} onClear={clearError}/> */}
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && loadedUsers && (
        <UsersList items={loadedUsers} onDeleteUser={userDeletedHandler} />
      )}
    </>
  );
};

export default Users;
