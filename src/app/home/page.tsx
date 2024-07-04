import React from 'react';
import GlobalStyles from '../styled';
import MainContent from './components/middle';
import Navbar from './components/navbar';
import { styled } from 'styled-components';
import Navigation from './components/navgation';



const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Navbar/>
        <MainContent />
        <Navigation/>
      
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.main`
 
  


`
/* position: relative;
  display: grid;
  grid-template-columns: 18vw auto 20vw;
  column-gap: 2rem;*/