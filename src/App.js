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
import Users from './user/pages/Users.js';
import UserForms from './user/pages/UserForms.jsx';
import UpdateWeeklyForm from './places/pages/UpdateWeeklyForm.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/:userId/forms' element={<UserForms />} />
        <Route path='/home' element={<Home />} />
        <Route path='/daily-handover' element={<DailyForm />} />
        <Route path='/weekly-handover' element={<WeeklyForm />} />
        <Route path='/weekly-handover/:formId' element={<UpdateWeeklyForm />} />
        <Route path='/monthly-handover' element={<MonthlyForm />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
