import React from 'react';
import styled from 'styled-components';
import { auth, googleProvider, facebookProvider } from '../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: #fff;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Login = () => {
  const navigate = useNavigate(); // Use `useNavigate` instead of `useHistory`

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Handle successful login
        navigate('/home'); // Use `navigate` instead of `history.push`
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleFacebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // Handle successful login
        navigate('/home'); // Use `navigate` instead of `history.push`
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleEmailLogin = () => {
    navigate('/email-login'); // Navigate to the email login page
  };

  const handleCreateProfile = () => {
    navigate('/create-profile'); // Navigate to the create profile page
  };

  return (
    <LoginContainer>
      <h1>Welcome to Spinz Casino</h1>
      <LoginButton onClick={handleGoogleLogin}>Login with Google</LoginButton>
      <LoginButton onClick={handleFacebookLogin}>Login with Facebook</LoginButton>
      <LoginButton onClick={handleEmailLogin}>Login with Email</LoginButton>
      <LoginButton onClick={handleCreateProfile}>Create Profile</LoginButton>
    </LoginContainer>
  );
};

export default Login;
