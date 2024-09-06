import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  const handleRegister = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
