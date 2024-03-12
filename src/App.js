import React from 'react';
import './App.scss';
import Navbar from './shared/components/navigation/Navbar.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './places/pages/Home.jsx';
import DailyForm from './places/pages/DailyForm.jsx';
import WeeklyForm from './places/pages/WeeklyForm.jsx';
import MonthlyForm from './places/pages/MonthlyForm.jsx';
import Footer from './places/components/Footer.jsx';
import Users from './user/pages/Users.jsx';
import UserForms from './user/pages/UserForms.jsx';
import UpdateWeeklyForm from './places/pages/UpdateWeeklyForm.jsx';
import Auth from './user/pages/Auth.jsx';
import { AuthContext } from './shared/context/auth-context.js';
import useAuth from './shared/hooks/Auth-hook.jsx';
import NewUser from './user/pages/NewUser.jsx';
import UpdateUser from './user/pages/UpdateUser.jsx';

function App() {
  const { token, login, logout, userId, isManager, isAdmin, status } =
    useAuth();
  let routes;

  if (token) {
    routes = (
      <>
        {isManager && <Route path='/users' element={<Users />} />}
        {isManager && <Route path='/users/:userId' element={<UpdateUser />} />}
        {isManager && <Route path='/users/new' element={<NewUser />} />}
        <Route path='/:userId/forms' element={<UserForms />} />
        <Route path='/home' element={<Home />} />
        <Route path='/daily-handover' element={<DailyForm />} />
        <Route path='/weekly-handover' element={<WeeklyForm />} />
        <Route
          path='/weekly-handovers/:formId'
          element={<UpdateWeeklyForm />}
        />
        <Route path='/monthly-handover' element={<MonthlyForm />} />
        <Route path='*' element={<Navigate to='/home' replace />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path='/home' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/:userId/forms' element={<UserForms />} />
        <Route path='*' element={<Navigate to='/auth' replace />} />
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        isManager: isManager,
        isAdmin: isAdmin,
        status: status,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Navbar />
        <Routes>{routes}</Routes>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
