import { initializeApp } from 'firebase/app';
import {getRedirectResult} from 'firebase/auth';
import {
  
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,//retrieve documents from db
  getDoc,//get document data
  setDoc //set document data
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
if (!userAuth) return;
  console.log(userAuth);
};
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore();//access db

export const createUserDocumentFromAuth = async (userAuth) => {
 const userDocRef = doc(db, 'users', userAuth.uid);
 console.log(userDocRef);
 
 const userSnapshot = await getDoc(userDocRef);
 if(!userSnapshot.exists()){
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    });
  } catch (error){
    console.log('error creating the user', error.message);
  }
}
return userDocRef;
 console.log(userSnapshot);

};