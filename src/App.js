import './App.scss';
import Navbar from './shared/components/Navbar.jsx';

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
import Users from './user/components/pages/Users.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/home' element={<Home />} />
        <Route path='/daily-handover' element={<DailyForm />} />
        <Route path='/weekly-handover' element={<WeeklyForm />} />
        <Route path='/monthly-handover' element={<MonthlyForm />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
