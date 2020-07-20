import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA6nBkRgRmW2ITrmrLc7ARFphlUfjAwGFs',
  authDomain: 'fir-test-4330a.firebaseapp.com',
  databaseURL: 'https://fir-test-4330a.firebaseio.com',
  projectId: 'fir-test-4330a',
  storageBucket: 'fir-test-4330a.appspot.com',
  messagingSenderId: '654160137437',
  appId: '1:654160137437:web:d4d6f59ed4b81c50fb5f34',
  measurementId: 'G-9D22VXMR18',
};

interface UserData {
  email: string | undefined;
  token: string | undefined;
}

// Initialize Firebase
class Firebase {
  auth: firebase.auth.Auth;

  constructor() {
    firebase.initializeApp(firebaseConfig);

    this.auth = firebase.auth();
  }

  doCreateUserWithEmailAndPassword(email: string, password: string): void {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  async doSignInWithEmailAndPassword(
    email: string,
    password: string,
  ): Promise<UserData> {
    const credentials = await this.auth.signInWithEmailAndPassword(
      email,
      password,
    );

    const idToken = await credentials.user?.getIdTokenResult();

    return {
      email: credentials.user?.email || undefined,
      token: idToken?.token,
    };
  }

  doSignOut(): void {
    this.auth.signOut();
  }
}

export default Firebase;
