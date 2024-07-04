/*import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface FloatingFormContainerProps {
  visible: boolean;
}

const Form: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Formulário de ${isLogin ? 'Login' : 'Cadastro'} enviado!`);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FloatingFormContainer visible={isVisible}>
      <FormContainer>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
        <form onSubmit={handleSubmit}>
       
          <Input type="email" name="email" placeholder="Digite seu email" required />
         
          <Input type="password" name="password" placeholder="Digite sua senha" required />
        
          <ContainerButton>
            <Button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</Button>
          </ContainerButton>
        </form>
        <SwitchLink onClick={toggleForm}>
          {isLogin ? 'Ainda não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
        </SwitchLink>
      </FormContainer>
    </FloatingFormContainer>
  );
};

export default Form;


const FloatingFormContainer = styled.div<FloatingFormContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #DED8CC;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: 100%;
  max-width: 400px;

  @media (max-width: 767px) {
    padding: 20px;
    width: 75%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #8f8a8a;
  border-radius: 4px;
 // margin-left: -15px;
  color: white;
  border-style: none;

  @media (max-width: 767px) {
    padding: 8px;
    margin: 8px 0;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #8F967F;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  //margin-right: 15px;
  

  &:hover {
    background: #6b705f;
  }

  @media (max-width: 767px) {
    padding: 8px;
    font-size: 14px;
    margin: 0;
    
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SwitchLink = styled.a`
  margin-top: 20px;
  color: #8F967F;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #6b705f;
  }
`;*/