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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
