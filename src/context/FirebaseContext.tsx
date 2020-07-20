import React, { createContext } from 'react';
import Firebase from '../config/firebase';

interface UserData {
  email: string | undefined;
  token: string | undefined;
}

export interface FirebaseContextData {
  signUp(email: string, password: string): void;
  signIn(email: string, password: string): Promise<UserData>;
  signOut(): void;
}

export const FirebaseContext = createContext<FirebaseContextData>(
  {} as FirebaseContextData,
);

export const FirebaseProvider: React.FC = ({ children }) => {
  const firebase = new Firebase();

  return (
    <FirebaseContext.Provider
      value={{
        signIn: (email: string, password: string) =>
          firebase.doSignInWithEmailAndPassword(email, password),
        signUp: (email: string, password: string) =>
          firebase.doCreateUserWithEmailAndPassword(email, password),
        signOut: firebase.doSignOut,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
