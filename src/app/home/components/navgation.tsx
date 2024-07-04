import React from 'react';
import styled from 'styled-components';

import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Brightness7, Markunread, Notifications, People, PeopleAlt } from '@mui/icons-material';
import Link from 'next/link';

const Left = styled.div`
  display: none;

  @media screen and (min-width: 360px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #ddd;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 0;
    z-index: 1000;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
  background: #fff;
  transition: background 0.3s;
  padding: 0.5rem;
  flex: 1;

  &:hover {
    background: #f0f0f0;
  }

  &.active {
    background: #e0e0e0;
  }

  .MuiButton-root {
    min-width: auto;
  }
`;

const Navigation: React.FC = () => {
  return (
    <Left>
      <MenuItem className="menu-item active">
        <Link href="#">
          <Button startIcon={<HomeIcon />} color="error"></Button>
        </Link>
      </MenuItem>
      <MenuItem className="menu-item" id="notifications">
        <Link href="#">
          <Button startIcon={<Notifications />} color="error"></Button>
        </Link>
      </MenuItem>
      <MenuItem className="menu-item" id="messages-notifications">
        <Link href='/message'>
          <Button startIcon={<Markunread />} color="error"></Button>
        </Link>
      </MenuItem>
      <MenuItem className="menu-item">
        <Link href='/grupo'>
          <Button startIcon={<PeopleAlt />} color="error"></Button>
        </Link>
      </MenuItem>
      <MenuItem className="menu-item">
        <Button startIcon={<Brightness7 />} color="error"></Button>
      </MenuItem>
    </Left>
  );
};

export default Navigation;
