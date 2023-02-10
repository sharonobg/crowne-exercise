import { initializeApp } from 'firebase/app';
import {
getAuth,
signInWithRedirect,
signInWithPopup,
GoogleAuthProvider,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
updatePassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,//retrieve documents from db
  getDoc,//get document data
  setDoc //set document data
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
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
const user = auth.UserCredential;
const email = user.email;
const password = user.password;
export const createUserProfileDocument = async (userAuth, additionalData) => {

};
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();//access db
export const signInWithYourEmailAndPassword = () => signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
});
export const createUserDocumentFromAuth = async (
  userAuth,additionaInformation = {}
  ) => {
  if(!userAuth) return;

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
