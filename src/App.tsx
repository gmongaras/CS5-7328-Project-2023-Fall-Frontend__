import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PasswordResetRequestPage from './pages/login/PasswordResetRequest';
import PasswordResetPage from './pages/login/PasswordReset';
import LoginPage from './pages/login/LoginPage';
import UserProfile from './pages/user/Profile';
import SignUpPage from './pages/login/SignUpPage';
import Home from './pages/Home';
import './stylesheets/App.css';
import ApplicationPage from './pages/apply/ApplicationPage';
// import { fakeAuthProvider } from "./auth";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<PasswordResetRequestPage />} />
        <Route path="/reset-password/:token" element={<PasswordResetPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<LoginPage />} />
        <Route path="/apply" element={<ApplicationPage />} />
      </Routes>
    </Router>
  );
};
export default App;
