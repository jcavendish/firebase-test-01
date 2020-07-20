import React, { useState, useCallback } from 'react';
import { Header, Menu, MenuItem, Container } from './styles';
import useFirebase from '../../hooks/useFirebase';

const Welcome: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useFirebase();

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      const user = await signIn(username, password);
      console.log(user);
    },
    [signIn, username, password],
  );

  return (
    <>
      <Header>
        <Menu>
          <MenuItem>Test</MenuItem>
        </Menu>
      </Header>
      <Container>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="User name"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button type="submit">Autenticar</button>
        </form>
      </Container>
    </>
  );
};

export default Welcome;
