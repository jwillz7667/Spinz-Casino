import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import EmailLogin from './components/EmailLogin';
import CreateProfile from './components/CreateProfile';
import Home from './components/Home';  // Assuming a Home component exists
import Header from './components/Header'; // Optional global header
import Footer from './components/Footer'; // Optional global footer

const App = () => {
  return (
    <Router>
      <Header /> {/* Header is displayed on all pages */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/email-login" element={<EmailLogin />} />
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer /> {/* Footer is displayed on all pages */}
    </Router>
  );
};

export default App;
