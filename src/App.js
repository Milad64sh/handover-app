import React, { Suspense } from 'react';
import './App.scss';
import Navbar from './shared/components/navigation/Navbar.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './places/pages/Home.jsx';
// import DailyForm from './places/pages/DailyForm.jsx';
// import WeeklyForm from './places/pages/WeeklyForm.jsx';
// import MonthlyForm from './places/pages/MonthlyForm.jsx';
// import Footer from './places/components/Footer.jsx';
// import Users from './user/pages/Users.jsx';
// import UserForms from './user/pages/UserForms.jsx';
// import UpdateWeeklyForm from './places/pages/UpdateWeeklyForm.jsx';
// import NewUser from './user/pages/NewUser.jsx';
// import AllForms from './places/pages/AllForms.jsx';
// import ReadWeeklyForm from './places/pages/ReadWeeklyFrom.jsx';
import Auth from './user/pages/Auth.jsx';
import { AuthContext } from './shared/context/auth-context.js';
import useAuth from './shared/hooks/Auth-hook.jsx';
import UpdateUser from './user/pages/UpdateUser.jsx';
import ManagerUpdateWeeklyForm from './places/pages/ManagerUpdateWeeklyForm.jsx';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner.js';
import ForgetPassword from './user/components/ForgetPassword.jsx';
import ResetPassword from './user/components/ResetPassword.jsx';

const DailyForm = React.lazy(() => import('./places/pages/DailyForm.jsx'));
const WeeklyForm = React.lazy(() => import('./places/pages/WeeklyForm.jsx'));
const MonthlyForm = React.lazy(() => import('./places/pages/MonthlyForm.jsx'));
const UserForms = React.lazy(() => import('./user/pages/UserForms.jsx'));
const Users = React.lazy(() => import('./user/pages/Users.jsx'));
const AllForms = React.lazy(() => import('./places/pages/AllForms.jsx'));
const NewUser = React.lazy(() => import('./user/pages/NewUser.jsx'));
const UpdateWeeklyForm = React.lazy(() =>
  import('./places/pages/UpdateWeeklyForm.jsx')
);
const ReadWeeklyForm = React.lazy(() =>
  import('./places/pages/ReadWeeklyFrom.jsx')
);

function App() {
  const { token, login, logout, userId, isManager, isAdmin, status, name } =
    useAuth();
  let routes;

  if (token) {
    routes = (
      <>
        {isManager && (
          <>
            <Route path='/users/' element={<Users />} />
            <Route path='/users/:userId' element={<UpdateUser />} />
            <Route path='/users/new' element={<NewUser />} />
            <Route path='/all-forms' element={<AllForms />} />
            <Route
              path='/all-forms/:formId'
              element={<ManagerUpdateWeeklyForm />}
            />
          </>
        )}
        <Route path='/:userId/forms' element={<UserForms />} />
        <Route path='/home' element={<Home />} />
        <Route path='/daily-handover' element={<DailyForm />} />
        <Route path='/weekly-handover' element={<WeeklyForm />} />
        <Route
          path='/weekly-handovers/:formId'
          element={<UpdateWeeklyForm />}
        />
        <Route
          path='/weekly-handovers/:formId/view-form'
          element={<ReadWeeklyForm />}
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
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset/:token' element={<ResetPassword />} />
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
        name: name,
        login: login,
        logout: logout,
      }}
    >
      <Suspense
        fallback={
          <div className='center'>
            <LoadingSpinner />
          </div>
        }
      >
        <Router>
          <Navbar />
          <Routes>{routes}</Routes>
          {/* <Footer /> */}
        </Router>
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
