import React from 'react';
import AuthForm from '../components/AuthForm';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory
  
  const handleRegister = () => {
    navigate('/dashboard'); // navigate to dashboard
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
