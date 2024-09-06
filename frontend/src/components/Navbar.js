import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav
      style={{
        backgroundColor: '#333',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <div>
        <Link
          to="/dashboard"
          style={{
            color: '#fff',
            textDecoration: 'none',
            marginRight: '1.5rem',
            fontSize: '1rem',
          }}
        >
          Dashboard
        </Link>
        {isAuthenticated && (
          <Link
            to="/sessions"
            style={{
              color: '#fff',
              textDecoration: 'none',
              marginRight: '1.5rem',
              fontSize: '1rem',
            }}
          >
            Sessions
          </Link>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <button
            onClick={onLogout}
            style={{
              color: '#fff',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              backgroundColor: '#ff0000',
              borderRadius: '4px',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                borderRadius: '4px',
                fontSize: '1rem',
                marginRight: '0.5rem',
              }}
            >
              Login
            </Link>
            <Link
              to="/"
              style={{
                color: '#fff',
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                backgroundColor: '#28a745',
                borderRadius: '4px',
                fontSize: '1rem',
              }}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
