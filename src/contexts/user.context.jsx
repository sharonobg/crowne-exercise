import{createContext, useState,useEffect} from 'react';
import {onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

{/* actual value you want to access */}
export const UserContext = createContext({
   currentUser: null,
   setCurrentUser: () => null,
});


{/*actual functional component that receives children*/}
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser}
    {/*signOutUser()*/}
    useEffect(() => {
        const unsubscribe  = onAuthStateChangedListener( (user)=>{
           if(user){
            createUserDocumentFromAuth(user);
           }
            setCurrentUser(user);
            
        });
        return unsubscribe;//cleans up
    },[]);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
