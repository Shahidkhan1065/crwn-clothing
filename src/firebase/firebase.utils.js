import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBHysfJ8VNIFRwuksesGG_qKr3SiI2otCQ',
  authDomain: 'crwn-db-f3922.firebaseapp.com',
  projectId: 'crwn-db-f3922',
  storageBucket: 'crwn-db-f3922.appspot.com',
  messagingSenderId: '554883246535',
  appId: '1:554883246535:web:97e9dfeb80f841125d51e2',
  measurementId: 'G-NL227F0C9Z',
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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
