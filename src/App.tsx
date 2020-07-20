import React from 'react';
import GlobalStyle from './styles/globalStyle';
import Welcome from './pages/Welcome/Welcome';
import { FirebaseProvider } from './context/FirebaseContext';

const App: React.FC = () => {
  return (
    <FirebaseProvider>
      <Welcome />
      <GlobalStyle />
    </FirebaseProvider>
  );
};

export default App;
