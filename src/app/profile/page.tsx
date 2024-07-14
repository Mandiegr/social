'use client';
import React from 'react';
import styled from 'styled-components';
import { Main } from '../home/page';
import { NavigateBefore } from '@mui/icons-material';

const UserProfile = () => {
  
  return (
    <Main>
      <Header>
        <ToBack onClick={() => history.back()}><NavigateBefore sx={{ color: 'red' }} /></ToBack>
      </Header>
    </Main>
  );
};

export default UserProfile;


const Header= styled.div`
`
const ToBack = styled.div`
`