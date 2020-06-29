import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBjwgczt6xlcnD_hFKPT-CZr16ShPtrZQ8",
    authDomain: "crwn-db-19996.firebaseapp.com",
    databaseURL: "https://crwn-db-19996.firebaseio.com",
    projectId: "crwn-db-19996",
    storageBucket: "crwn-db-19996.appspot.com",
    messagingSenderId: "862696993453",
    appId: "1:862696993453:web:4f2cedd11b5a19dd4f4c24",
    measurementId: "G-0TZ9FZ21SP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;