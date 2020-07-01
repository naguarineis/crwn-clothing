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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;