import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} isLogin   />
    </div>
  );
};

export default LoginPage;
