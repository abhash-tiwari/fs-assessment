import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/sessions">Sessions</Link>
      <Link to="/" onClick={handleLogout}>
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
