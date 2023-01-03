import { initializeApp } from 'firebase/app';
//import firebase from 'firebase/app';
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyANqHRAwsCjwUEG4fAFg6CMgTRuktKfZEM",
  
    authDomain: "crown-db-791ff.firebaseapp.com",
  
    projectId: "crown-db-791ff",
  
    storageBucket: "crown-db-791ff.appspot.com",
  
    messagingSenderId: "420780727381",
  
    appId: "1:420780727381:web:77fb0d93c8ed0ad98888dc"
  
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;

console.log(userAuth);
};


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
 const userDocRef = doc(db, 'users', userAuth.uid);
}