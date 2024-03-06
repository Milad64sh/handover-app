import React, { useState, useCallback, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

let logoutTimer;

export const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDateState, setTokenExpirationDateState] = useState();
  const [userId, setUserId] = useState(false);
  const [isManager, setIsManager] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [status, setStatus] = useState('Employee');

  const login = useCallback((uid, token, expirationDate) => {
    const decoded = jwtDecode(token);
    const { name, roles } = decoded.UserInfo;
    const isManagerValue = roles.includes('Manager');
    const isAdminValue = roles.includes('Admin');
    let statusValue = 'Employee';
    if (isManagerValue) statusValue = 'Manager';
    if (isAdminValue) statusValue = 'Admin';

    setToken(token);
    setUserId(uid);
    setIsManager(isManagerValue);
    setIsAdmin(isAdminValue);
    setStatus(statusValue);

    let tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    if (!(tokenExpirationDate instanceof Date)) {
      tokenExpirationDate = new Date(tokenExpirationDate);
    }
    setTokenExpirationDateState(tokenExpirationDate);

    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        isManager: isManagerValue,
        isAdmin: isAdminValue,
        status: statusValue,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );

    // Perform additional actions after state has been updated
    // This will ensure you have the latest state values
    // Example: console.log('isManagerValue:', isManagerValue);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDateState(null);
    setUserId(null);
    setIsAdmin(null);
    setIsManager(null);

    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDateState) {
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDateState]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      const remainingTime =
        new Date(storedData.expiration).getTime() - new Date().getTime();
      login(
        storedData.userId,
        storedData.token,
        storedData.isManager,
        storedData.status,
        new Date(storedData.expiration)
      );
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [login, logout]);

  return {
    name: '',
    roles: [],
    isAdmin,
    isManager,
    status: '',
    token,
    login,
    logout,
    userId,
  };
};

export default useAuth;
