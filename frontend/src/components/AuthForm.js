import React, { useState } from 'react';
import API from '../api';

const AuthForm = ({ onSubmit, isLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isLogin
        ? await API.post('/auth/login', { email, password })
        : await API.post('/auth/register', { email, password });
      localStorage.setItem('token', response.data.token);
      onSubmit();
    } catch (error) {
      console.error('Authentication failed', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '0.8rem',
          margin: '0.5rem 0',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{
          width: '100%',
          padding: '0.8rem',
          margin: '0.5rem 0',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '0.8rem',
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#4caf50')}
      >
        {isLogin ? 'Login' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
