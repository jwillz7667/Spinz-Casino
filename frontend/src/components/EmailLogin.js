import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';  // Use `useNavigate` instead of `useHistory`

const EmailLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: #fff;
`;

const InputField = styled.input`
  margin: 10px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
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

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  // Use `useNavigate` instead of `useHistory`

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful login
        navigate('/home');  // Use `navigate` to programmatically navigate
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <EmailLoginContainer>
      <h1>Email Login</h1>
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton onClick={handleLogin}>Login</SubmitButton>
    </EmailLoginContainer>
  );
};

export default EmailLogin;
