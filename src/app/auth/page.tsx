'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Main } from '../home/page';
import { NavigateBefore } from '@mui/icons-material';

const Form: React.FC = () => {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (isLogin) {
        await loginUser();
      } else {
        await registerUser();
      }
    } catch (err) {
      setError('Ocorreu um erro. Por favor, tente novamente.');
    }
  };

  const registerUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
        username,
      });
      console.log('Registro bem-sucedido:', response.data);
      localStorage.setItem('token', response.data.token);
      alert('Registro bem-sucedido! Redirecionando para o perfil.');
      router.push('/profile'); 
    } catch (error) {
      console.error('Erro ao registrar:', error);
      setError('Erro ao registrar. Por favor, tente novamente.');
    }
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      console.log('Login bem-sucedido:', response.data);
      localStorage.setItem('token', response.data.token);
      alert('Login bem-sucedido! Redirecionando para o perfil.');
      router.push('/profile'); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao fazer login. Por favor, tente novamente.');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  return (
    <Main>
       <Header>
        <ToBack onClick={() => router.back()}><NavigateBefore sx={{ color: 'red' }} /></ToBack>
      </Header>
    <FloatingFormContainer>
      <FormContainer>
        <FormHeader>{isLogin ? 'Login' : 'Cadastro'}</FormHeader>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <Input
              type="text"
              name="username"
              placeholder="Nome de usuário"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitButton type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</SubmitButton>
        </form>
        <ToggleFormButton onClick={toggleForm}>
          {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
        </ToggleFormButton>
      </FormContainer>
    </FloatingFormContainer>
    </Main>
  );
};

const FloatingFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Header = styled.div`
`
const ToBack = styled.div`
`

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const FormHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #a01313;
  }
`;

const ToggleFormButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: #a01313;
  border: none;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Form;
