import styled from 'styled-components';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleLoginClick = () => {
    setShowForm(!showForm);
  };

  return (
    <NavbarContainer>
      <InnerContainer>
        <Logo>LOGO</Logo>
        <SearchBar>
          <i className="uil uil-search"></i>
          <SearchInput type="search" placeholder="Search for creators, inspirations, and projects" />
        </SearchBar>
        <CreateSection>
         {/**<LoginButton onClick={handleLoginClick}>Login</LoginButton>
          {showForm && (
           
              <Form/>
            
          )} */} 
          <ProfilePhoto>
            <img src="https://lh3.googleusercontent.com/a/AAcHTtcPgxM1MxW7KaKGUsejzKxNQ65u8Mrt59fcOj2KYg=s96-c" alt="Profile" />
          </ProfilePhoto>
        </CreateSection>
      </InnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  width: 100%;
  background: var(--color-white);
  padding: 0.7rem 0;
  position: fixed;
  top: 0;
  left: -0.1rem;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

const Logo = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 1.2rem;
  color: red;
`;

const SearchBar = styled.div`
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: var(--search-padding);
  position: relative;
  flex: 1;
  margin: 0 1rem;
  display: flex;
  align-items: center;

  i {
    position: absolute;
    left: 0.5rem;
  }
`;

const SearchInput = styled.input`
  background: transparent;
  width: 100%;
  padding-left: 2rem;
  font-size: 0.9rem;
  color: var(--color-dark);
  border: none;
  outline: none;

  &::placeholder {
    color: var(--color-gray);
  }
`;

const CreateSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfilePhoto = styled.div`
  img {
    display: block;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`;

const LoginForm = styled.div`
  display: block;
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--color-white);
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  z-index: 1000;
`;

const LoginButton = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: var(--border-radius);
  background: var(--color-primary);
  color: white;
  transition: all 300ms ease;
  font-size: 0.9rem;
  border: none;

  &:hover {
    opacity: 0.8;
  }
`;
