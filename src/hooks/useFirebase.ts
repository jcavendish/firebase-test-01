import { useContext } from 'react';
import {
  FirebaseContext,
  FirebaseContextData,
} from '../context/FirebaseContext';

function useFirebase(): FirebaseContextData {
  const context = useContext(FirebaseContext);

  return context;
}

export default useFirebase;
