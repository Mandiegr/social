'use client'
import { NavigateBefore } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f0;
  
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  background-color: #ffffff;
  color: red;
  z-index: 1000;
  
 
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
`;

const ToggleButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 0.75rem;
  background-color: ${(props) => (props.active ? 'red' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? 'red' : '#f0f0f0')};
  }

  &:not(:last-child) {
    border-right: none;
  }
`;

const PlusButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 1rem;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const ConversationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ConversationItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.412);
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const MessagesList = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const Message = styled.div<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? 'red' : '#fff')};
  color: ${(props) => (props.isUser ? '#fff' : '#333')};
  padding: 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  max-width: 60%;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid #ddd;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const SendButton = styled.button`
  padding: 0.75rem;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #773636;
  }
`;

const MessageComponent: React.FC<{ userName: string; onBack: () => void }> = ({ userName, onBack }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      setNewMessage('');
    }
  };

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}><NavigateBefore sx={{ color: 'red' }} /></BackButton>
        Chat com {userName}
      </Header>
      <MessagesList>
        {messages.map((message, index) => (
          <Message key={index} isUser={message.isUser}>
            {message.text}
          </Message>
        ))}
      </MessagesList>
      <InputContainer>
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Digite uma mensagem..."
        />
        <SendButton onClick={handleSendMessage}>Enviar</SendButton>
      </InputContainer>
    </Container>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conversas' | 'grupos'>('conversas');
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [groups, setGroups] = useState<string[]>(['Grupo 1', 'Grupo 2']);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

  const handleTabChange = (tab: 'conversas' | 'grupos') => {
    setActiveTab(tab);
    setSelectedConversation(null);
    setSelectedGroup(null);
  };

  const handleCreateGroup = () => {
    const newGroupName = prompt('Nome do novo grupo:');
    if (newGroupName) {
      setGroups([...groups, newGroupName]);
    }
  };

  const conversations = [
    { name: 'João', imageUrl: 'https://via.placeholder.com/40' },
    { name: 'Maria', imageUrl: 'https://via.placeholder.com/40' },
    { name: 'Carlos', imageUrl: 'https://via.placeholder.com/40' }
  ];

  return (
    <Container>
      {selectedConversation || selectedGroup ? (
        <MessageComponent
          userName={selectedConversation || selectedGroup || ''}
          onBack={() => {
            setSelectedConversation(null);
            setSelectedGroup(null);
          }}
        />
      ) : (
        <>
          <Header>
            <BackButton onClick={() => window.history.back()}><Button startIcon={<NavigateBefore sx={{ color: 'red' }} />} color="error"></Button></BackButton>
          </Header>
          <ToggleContainer>
            <ToggleButton active={activeTab === 'conversas'} onClick={() => handleTabChange('conversas')}>
              Conversas
            </ToggleButton>
            <ToggleButton active={activeTab === 'grupos'} onClick={() => handleTabChange('grupos')}>
              Grupos
            </ToggleButton>
            <PlusButton onClick={handleCreateGroup}>+</PlusButton>
          </ToggleContainer>
          <MainContent>
            {activeTab === 'conversas' ? (
              <ConversationList>
                {conversations.map((conversation) => (
                  <ConversationItem key={conversation.name} onClick={() => setSelectedConversation(conversation.name)}>
                    <UserImage src={conversation.imageUrl} alt={`${conversation.name}'s avatar`} />
                    {conversation.name}
                  </ConversationItem>
                ))}
              </ConversationList>
            ) : (
              <ConversationList>
                {groups.map((group) => (
                  <ConversationItem key={group} onClick={() => setSelectedGroup(group)}>
                    {group}
                  </ConversationItem>
                ))}
              </ConversationList>
            )}
          </MainContent>
        </>
      )}
    </Container>
  );
};

export default App;
