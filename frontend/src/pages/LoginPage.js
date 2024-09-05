import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory
  
  const handleLogin = () => {
    navigate('/dashboard'); // navigate to dashboard
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} isLogin />
    </div>
  );
};

export default LoginPage;
