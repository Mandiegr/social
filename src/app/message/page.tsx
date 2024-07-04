'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: red;
  color: #fff;
  text-align: center;
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
    background-color: red;
  }
`;

const MessageComponent: React.FC = () => {
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
      <Header>Chat</Header>
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
          placeholder="Type a message..."
        />
        <SendButton onClick={handleSendMessage}>Send</SendButton>
      </InputContainer>
    </Container>
  );
};

export default MessageComponent;
