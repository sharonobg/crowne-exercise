import { initializeApp } from 'firebase/app';
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
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
};
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();//access db

export const createUserDocumentFromAuth = async (
  userAuth,additionaInformation = {}
  ) => {
  if(!userAuth) return;

 const userDocRef = doc(db, 'users', userAuth.uid);
 const userSnapshot = await getDoc(userDocRef);
 if(!userSnapshot.exists()){
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionaInformation
    });
  } catch (error){
    console.log('error creating the user', error.message);
  }
}
return userDocRef;

};
export const createAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email,password) => {
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = async ()=> await signOut(auth);
export const onAuthStateChangedListener = (callback) => 
onAuthStateChanged(auth, callback);
/**
 * {
 * onAuthStateChanged(auth, callback,errorCallback, completedCallback);
 * next:callback,
 * err: errorCallback,
 * complete: completedCallback
 * }
 * 
 */
