'use client'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Main } from '../home/page';
import { NavigateBefore } from '@mui/icons-material';
import axios from 'axios';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ username: '', name: '', profession: '', profile_picture: '' });
  const [username, setUsername] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUserProfile();
    fetchUserPosts();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/users/profile', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = response.data;
      setProfile(data);
      setUsername(data.username);
      setJobTitle(data.profession);
      setProfilePicture(data.profile_picture);
    } catch (error) {
      console.error('Erro ao buscar perfil do usuário:', error);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/posts', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Erro ao buscar posts do usuário:', error);
    }
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/users/profile', {
        username, profession: jobTitle, profile_picture: profilePicture
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setIsEditing(false);
      fetchUserProfile();
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
    }
  };

  return (
    <Main>
      <Header>
        <ToBack onClick={() => history.back()}><NavigateBefore sx={{ color: 'red' }} /></ToBack>
      </Header>
      <ProfileContainer>
        <ProfileHeader>
          <Avatar alt="User Avatar" src={profile.profile_picture} sx={{ width: 100, height: 100 }} />
          {!isEditing ? (
            <ProfileInfo>
              <Typography variant="h5">{profile.username}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{profile.profession}</Typography>
              <Button variant="outlined" color="error" startIcon={<EditIcon />} onClick={handleEditProfile}>Edit Profile</Button>
            </ProfileInfo>
          ) : (
            <EditProfileForm onSubmit={handleSaveProfile}>
              <Input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Cargo"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <Input
                type="text"
                placeholder="URL da foto de perfil"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
              />
              <SubmitButton type="submit" variant="contained" color="error">Salvar</SubmitButton>
            </EditProfileForm>
          )}
        </ProfileHeader>
        <ProfileActions>
          <Button variant="contained" color="error">Create Post</Button>
        </ProfileActions>
        <ProfileContent>
          <Typography variant="h6">Posts</Typography>
        </ProfileContent>
      </ProfileContainer>
    </Main>
  );
};

export default UserProfile;

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
`;

const ToBack = styled.div`
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileInfo = styled.div`
  margin-left: 20px;
`;

const ProfileActions = styled.div`
  margin-top: 20px;
`;

const ProfileContent = styled.div`
  margin-top: 20px;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const PostCard = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled(Button)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled(Button)`
  margin-top: 10px !important;
`;
